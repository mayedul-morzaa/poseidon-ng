import { BrandTypeEnum, BrandTypeLabels } from '@/core/enums/brand-type.enum';
import { BrandDto } from '@/features/inventory/models/brand-dto.model';
import { BrandService } from '@/features/inventory/services/brand.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-brand-list',
  imports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    TagModule,
    InputIconModule,
    InputTextModule,
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    SelectModule
  ],
  templateUrl: './brand-list.html'
})
export class BrandList implements OnInit {
  showDialog = false;
  form!: FormGroup;
  thumbImageFile?: File | null;

  brandTypeOptions = Object.entries(BrandTypeLabels).map(([value, label]) => ({ value: Number(value), label }));
  brands: BrandDto[] = [];

  isEditMode = false;
  selectedBrand: BrandDto | null = null;

  constructor(
    private brandService: BrandService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadBrands();

    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      brandTypeId: [BrandTypeEnum.Brand, Validators.required],
      webSite: ['', Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)],
      thumbImagePath: ['']
    });

  }

  loadBrands(): void {
    this.brandService.getAll().subscribe({
      next: (res) => {
        if (res?.success && Array.isArray(res.data)) {
          this.brands = res.data;
        } else {
          this.brands = [];
          this.messageService.add({
            severity: 'warn',
            summary: 'Unexpected Response',
            detail: 'Could not load brands.',
            life: 3000
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err?.error?.message || 'Failed to load brands.',
          life: 4000
        });
      }
    });
  }

  openNew(): void {
    this.showDialog = true;
    this.form.reset({
      brandTypeId: BrandTypeEnum.Brand
    });
  }

  editBrand(brand: BrandDto): void {
    this.isEditMode = true;
    this.selectedBrand = brand;
    this.form.patchValue(brand);
    this.showDialog = true;
  }

  onThumbUpload(event: any): void {
    this.thumbImageFile = event.files[0];
  }

  submit(): void {
    if (this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    if (this.thumbImageFile) formData.append('thumbImage', this.thumbImageFile);

    if (this.isEditMode && this.selectedBrand) {
      this.brandService.update(this.selectedBrand.id!, formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: res.message || 'Brand updated successfully.',
            life: 3000
          });
          this.loadBrands();
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to update brand.',
            life: 4000
          });
        }
      });
    } else {
      this.brandService.create(formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Created',
            detail: res.message || 'Brand created successfully.',
            life: 3000
          });
          this.loadBrands();
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to create brand.',
            life: 4000
          });
        }
      });
    }
  }

  closeDialog(): void {
    this.showDialog = false;
    this.form.reset();
    this.isEditMode = false;
    this.selectedBrand = null;
    this.thumbImageFile = null;
  }

  deleteBrand(brand: BrandDto): void {
    if (!brand?.id) return;

    this.confirmationService.confirm({
      header: 'Delete Brand',
      message: `Are you sure you want to delete "${brand.name}"?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.brandService.delete(brand.id!).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: res.message || 'Brand deleted successfully.',
              life: 3000
            });
            this.loadBrands();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Delete Failed',
              detail: err?.error?.message || 'Could not delete brand.',
              life: 4000
            });
          }
        });
      }
    });
  }

  onGlobalFilter(table: any, event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    table.filterGlobal(input, 'contains');
  }
}
