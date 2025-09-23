import { EntityStatusEnum } from '@/core/enums/entity-status.enum';
import { GalleryLevelEnum, GalleryLevelLabels } from '@/core/enums/gallery-level.enum';
import { GalleryDto, GalleryItemDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FileUploadHandlerEvent, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-gallery-add-or-update',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    FileUploadModule,
    ButtonModule,
    SelectModule
  ],
  templateUrl: './gallery-add-or-update.html'
})
export class GalleryAddOrUpdate implements OnInit{

  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  form: FormGroup;
  filteredParentOptions : GalleryDto[] = [];

  galleryLevelOptions = Object.entries(GalleryLevelLabels).map(([key, label]) => ({
    id: Number(key),
    name: label
  }));

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private messageService: MessageService
  ) {
      this.form = this.fb.group({
        title: ['', Validators.required],
        galleryLevel: [GalleryLevelEnum.Parent0, Validators.required],
        parentGalleryId: [null],
        galleryItems: [[]]
      });
  }

  ngOnInit(): void {
    this.setupGalleryLevelWatcher();

    if (this.form.get('galleryLevel')?.value === GalleryLevelEnum.Parent0) {
      this.applyBaseLevelDefaults();
    }
  }

  closeDialog() {
    this.visible = false;
    this.closed.emit();
    this.form.reset({
      title: '',
      galleryLevel: GalleryLevelEnum.Parent0,
      parentGalleryId: null,
      galleryItems: []
    });
    this.applyBaseLevelDefaults();
  }

  handleGalleryItemUpload(event: FileUploadHandlerEvent) {
    const files = event.files;
    this.form.controls['galleryItems'].setValue(files);
  }

  submit() {
      if (this.form.valid) {
        const title = this.form.get('title')?.value;
        const galleryLevel = this.form.get('galleryLevel')?.value;
        const parentGalleryId = this.form.get('parentGalleryId')?.value;
        const files: File[] = this.form.get('galleryItems')?.value;

        const formData = new FormData();

        // GalleryDto fields
        formData.append('title', title);
        formData.append('galleryLevel', galleryLevel);
        formData.append('parentGalleryId', galleryLevel === GalleryLevelEnum.Parent0 ? '' : parentGalleryId?.toString() ?? '');

        // GalleryItemDto[] fields
        files.forEach((file, index) => {
          formData.append(`galleryItems[${index}].title`, `${title} - item${index + 1}`);
          formData.append(`galleryItems[${index}].thumbImage`, file);
          formData.append(`galleryItems[${index}].imageAltText`, title);
        });

        console.log(formData);

        this.galleryService.create(formData).subscribe({
          next: (res) => {
            console.log(res);
            this.closeDialog();
            this.messageService.add({
              severity: 'success',
              summary: 'Gallery Created',
              detail: res.message,
              life: 3000
            });
          },
          error: (err) => {
            console.log(err)
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err?.error?.message || 'Failed to add gallery',
              life: 3000
            });
          }
        })
      }
    }

  private setupGalleryLevelWatcher(): void {
    this.form.get('galleryLevel')?.valueChanges.subscribe(level => {
      if (level === GalleryLevelEnum.Parent0) {
       this.applyBaseLevelDefaults();
      } else {
        const validParentLevel = level - 1;
        this.galleryService.getGalleriesByLevel(validParentLevel).subscribe({
          next: (res) => {
            if (res?.success && res.data) {
              this.filteredParentOptions = res.data;
              this.form.get('parentGalleryId')?.enable();
            } else {
              this.filteredParentOptions = [];
              this.form.get('parentGalleryId')?.disable();
              this.messageService.add({
                severity: 'warn',
                summary: 'No galleries found',
                detail: `No parent galleries available for level ${validParentLevel}`,
                life: 4000
              });
            }
          },
          error: (err) => {
            this.filteredParentOptions = [];
            this.form.get('parentGalleryId')?.disable();
            this.messageService.add({
              severity: 'error',
              summary: '',
              detail: err?.error?.message || 'Something went wrong while fetching parent galleries.',
              life: 5000
            });
          }
        });
      }
    });
  }
  private applyBaseLevelDefaults(): void {
    this.form.get('parentGalleryId')?.setValue(null);
    this.form.get('parentGalleryId')?.disable();
  }

  get isBaseLevel(): boolean {
    return this.form.get('galleryLevel')?.value === GalleryLevelEnum.Parent0;
  }
}
