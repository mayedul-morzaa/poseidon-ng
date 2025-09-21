import { EntityStatusEnum } from '@/core/enums/entity-status.enum';
import { GalleryLevelEnum } from '@/core/enums/gallery-level.enum';
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

  parentOptions = [
    { id: 1, name: 'Nature Gallery' },
    { id: 2, name: 'Travel Gallery' },
    { id: 3, name: 'Food Gallery' }
  ];

  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      isParent: [false],
      parentGalleryId: [null],
      galleryItems: [[]]
    });
    // Watch isParent toggle
    this.form.controls['isParent'].valueChanges.subscribe((isParent: boolean) => {
      if (isParent) {
        this.form.controls['parentGalleryId'].disable();
        this.form.controls['parentGalleryId'].setValue(null);
      } else {
        this.form.controls['parentGalleryId'].enable();
      }
    });
  }

  closeDialog() {
    this.visible = false;
    this.closed.emit();
    this.form.reset({ title: '', isParent: false, parentGalleryId: null, galleryItems: [] });
  }

  handleGalleryItemUpload(event: FileUploadHandlerEvent) {
    const files = event.files;
    this.form.controls['galleryItems'].setValue(files);
  }

  submit() {

  if (this.form.valid) {
    const title = this.form.get('title')?.value;
    const isParent = this.form.get('isParent')?.value;
    const parentGalleryId = this.form.get('parentGalleryId')?.value;
    const files: File[] = this.form.get('galleryItems')?.value;

    const formData = new FormData();

    // GalleryDto fields
    formData.append('title', title);
    formData.append('parentGalleryId', isParent ? '' : parentGalleryId?.toString() ?? '');

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
          summary: 'Updated',
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
}
