
import { ProductCategoryLevelEnum, ProductCategoryLevelLabels } from '@/core/enums/product-category-level.enum';
import { ProductCategoryDto } from '@/features/inventory/models/product-category-dto.model';
import { ProductCategoryService } from '@/features/inventory/services/product-category.service';
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
  selector: 'app-product-category-list',
  imports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    TagModule,
    InputIconModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    SelectModule,
    CommonModule
  ],
  templateUrl: './product-category-list.html'
})
export class ProductCategoryList implements OnInit{
  showDialog = false;
  form!: FormGroup;
  thumbImageFile?: File | null;
  iconImageFile?: File | null;

  productCategoryLevelOptions = Object.entries(ProductCategoryLevelLabels).map(([value, label]) => ({ value: Number(value), label }));
  parentOptions: any[] = []; // Load from API 

  isEditMode = false;
  selectedCategory: ProductCategoryDto | null = null;
  categories: ProductCategoryDto[] = [];

  constructor(
    private productCategoryService : ProductCategoryService,
    private confirmationService : ConfirmationService,
    private messageService : MessageService,
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.loadCategories();

    this.form = this.fb.group({
      id: [null],
      categoryName: ['', Validators.required],
      secondaryName: [''],
      catLevel: [ProductCategoryLevelEnum.Primary,Validators.required],
      parentCategoryId: [null],
      imageAltText: ['']
    });

    this.setupCategoryLevelWatcher();
  }

  loadCategories(): void {
    this.productCategoryService.getAll().subscribe({
      next: (res) => {
        if (res?.success && Array.isArray(res.data)) {
          this.categories = res.data;

          if (res.data.length === 0) {
            this.messageService.add({
              severity: 'info',
              summary: 'No Categories',
              detail: 'No product categories found. Start by creating one.',
              life: 3000
            });
          }
        } else {
          this.categories = [];
          this.messageService.add({
            severity: 'warn',
            summary: 'Unexpected Response',
            detail: 'Could not load product categories.',
            life: 3000
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err?.error?.message || 'Failed to load product categories.',
          life: 4000
        });
      }
    });
  }

  openNew(): void {
    this.showDialog = true;
    this.form.reset({
        catLevel: ProductCategoryLevelEnum.Primary,
        parentCategoryId: null
    })
  }

  editCategory(category: ProductCategoryDto): void {
    this.isEditMode = true;
    this.selectedCategory = category;
    this.form.patchValue(category);
    this.showDialog = true;
  }

  onThumbUpload(event: any): void {
    this.thumbImageFile = event.files[0];
  }

  onIconUpload(event: any): void {
    this.iconImageFile = event.files[0];
  }

  submit(): void {

    if(this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
    });

    if (this.thumbImageFile) formData.append('thumbImage', this.thumbImageFile);
    if (this.iconImageFile) formData.append('iconImage', this.iconImageFile);

    if(this.isEditMode && this.selectedCategory){
      this.productCategoryService.update(this.selectedCategory.id!, formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: res.message || 'Category updated successfully.',
            life: 3000
          });
          this.loadCategories();
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to update category.',
            life: 4000
          });
        }
      });
    }
    else{
      this.productCategoryService.create(formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Created',
            detail: res.message || 'Category created successfully.',
            life: 3000
          });
          this.loadCategories();
          this.showDialog = false;
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to create category.',
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
    this.selectedCategory = null;
    this.thumbImageFile = null;
    this.iconImageFile = null;
  }

  deleteCategory(category: ProductCategoryDto): void {
    console.log(category)
    if (!category?.id) return;

    this.confirmationService.confirm({
      header: 'Delete Category',
      message: `Are you sure you want to delete "${category.categoryName}"?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.productCategoryService.delete(category.id!).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: res.message || 'Category deleted successfully.',
              life: 3000
            });
            this.loadCategories();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Delete Failed',
              detail: err?.error?.message || 'Could not delete category.',
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

  private setupCategoryLevelWatcher(): void {
    this.form.get('catLevel')?.valueChanges.subscribe(level => {
      console.log(level)
      if (level === ProductCategoryLevelEnum.Primary || level == null || isNaN(level)) {
        this.applyBaseLevelDefaults();
      }else{
        const validParentLevel = level - 1;
        this.productCategoryService.getCategoriesByLevel(validParentLevel).subscribe({
          next: (res) => {
            if (res?.success && res.data) {
              this.parentOptions = res.data;
              this.form.get('parentCategoryId')?.enable();
            } else {
              this.parentOptions = [];
              this.form.get('parentCategoryId')?.disable();
              this.messageService.add({
                severity: 'warn',
                summary: 'No categories found',
                detail: `No parent categories available for level ${validParentLevel}`,
                life: 4000
              });
            }
          },
          error: (err) => {
            this.parentOptions = [];
            this.form.get('parentCategoryId')?.disable();
            this.messageService.add({
              severity: 'error',
              summary: '',
              detail: err?.error?.message || 'Something went wrong while fetching parent categories.',
              life: 5000
            });
          }
        });
      }
    });
  }

  private applyBaseLevelDefaults(): void {
    this.form.get('parentCategoryId')?.setValue(null);
    this.form.get('parentCategoryId')?.disable();
  }

  get isBaseLevel(): boolean {
    return this.form.get('catLevel')?.value === ProductCategoryLevelEnum.Primary;
  }

}
