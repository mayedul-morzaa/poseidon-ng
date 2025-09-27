import { LocationTypeEnum, LocationTypeLabels } from '@/core/enums/location-type.enum';
import { StoreLocationDto } from '@/features/inventory/models/store-location-dto.model';
import { StoreLocationService } from '@/features/inventory/services/store-location.service';
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
import { divisions, districtsByDivision } from '@/core/constants/geo.constants';


@Component({
  selector: 'app-store-location-list',
  imports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    TagModule,
    InputIconModule,
    InputTextModule,
    DialogModule,
    FileUploadModule,
    SelectModule,
    ReactiveFormsModule,
    FileUploadModule,
    CommonModule
  ],
  templateUrl: './store-location-list.html'
})
export class StoreLocationList implements OnInit {
  showDialog = false;
  form!: FormGroup;
  imageFile?: File | null;

  locationTypeOptions = Object.entries(LocationTypeLabels).map(([value, label]) => ({ value: Number(value), label }));
  locations: StoreLocationDto[] = [];

  isEditMode = false;
  selectedLocation: StoreLocationDto | null = null;
  divisionOptions = divisions;
  filteredDistrictsOption: { value: string; label: string }[] = [];

  constructor(
    private storeLocationService: StoreLocationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadLocations();

    this.form = this.fb.group({
      id: [null],
      locationName: ['', Validators.required],
      locationTypeId: [LocationTypeEnum.Warehouse, Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      district: ['', Validators.required],
      division: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-()\s]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      googleMap: ['',Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)],
      imagePath: ['']
    });

    this.form.get('division')?.valueChanges.subscribe((division) => {
      this.filteredDistrictsOption = districtsByDivision[division] || [];
      this.form.get('district')?.setValue(null);
    });
  }

  loadLocations(): void {
    this.storeLocationService.getAll().subscribe({
      next: (res) => {
        if (res?.success && Array.isArray(res.data)) {
          this.locations = res.data;
        } else {
          this.locations = [];
          this.messageService.add({
            severity: 'warn',
            summary: 'Unexpected Response',
            detail: 'Could not load store locations.',
            life: 3000
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err?.error?.message || 'Failed to load store locations.',
          life: 4000
        });
      }
    });
  }

  openNew(): void {
    this.showDialog = true;
    this.form.reset({
      locationTypeId: LocationTypeEnum.Warehouse
    });
    this.filteredDistrictsOption = [];
  }

  editLocation(location: StoreLocationDto): void {
    console.log(location)
    this.isEditMode = true;
    this.selectedLocation = location;
    this.form.patchValue({
      ...location,
      locationTypeId: Number(location.locationTypeId),
      district: null
    });

    this.filteredDistrictsOption = districtsByDivision[location.division] || [];
    setTimeout(() => {
      this.form.get('district')?.setValue(location.district);
    });
    this.showDialog = true;
  }

  onImageUpload(event: any): void {
    this.imageFile = event.files[0];
  }

  submit(): void {
    if (this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    if (this.imageFile) formData.append('image', this.imageFile);

    if (this.isEditMode && this.selectedLocation) {
      this.storeLocationService.update(this.selectedLocation.id!, formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: res.message || 'Location updated successfully.',
            life: 3000
          });
          this.loadLocations();
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to update location.',
            life: 4000
          });
        }
      });
    } else {
      this.storeLocationService.create(formData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Created',
            detail: res.message || 'Location created successfully.',
            life: 3000
          });
          this.loadLocations();
          this.closeDialog();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to create location.',
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
    this.selectedLocation = null;
    this.imageFile = null;
  }

  deleteLocation(location: StoreLocationDto): void {
    if (!location?.id) return;

    this.confirmationService.confirm({
      header: 'Delete Location',
      message: `Are you sure you want to delete "${location.locationName}"?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.storeLocationService.delete(location.id!).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: res.message || 'Location deleted successfully.',
              life: 3000
            });
            this.loadLocations();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Delete Failed',
              detail: err?.error?.message || 'Could not delete location.',
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
