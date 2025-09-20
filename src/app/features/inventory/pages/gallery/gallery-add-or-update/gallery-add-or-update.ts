import { EntityStatusEnum } from '@/core/enums/entity-status.enum';
import { GalleryLevelEnum } from '@/core/enums/gallery-level.enum';
import { GalleryDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FileUploadEvent, FileUploadHandlerEvent, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-gallery-add-or-update',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule
  ],
  templateUrl: './gallery-add-or-update.html'
})
export class GalleryAddOrUpdate implements OnInit{
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

form: FormGroup;

ngOnInit() {

}

  constructor(private fb: FormBuilder, private galleryService: GalleryService) {
  this.form = this.fb.group({
    id: [0],
    parentGalleryId: [null],
    parentName: [''],
    title: ['', [Validators.required, Validators.maxLength(100)]],
    thumbImage: [null],
    thumbImagePath: [''],
    imageAltText: ['', Validators.maxLength(150)],
    editDate: [null],
    lastUpdateText: [''],
    galleryItems: [[]]
  });
  }

  handleUpload(event: FileUploadHandlerEvent) {
    const files = event.files;
    const title = this.form.value.title;

    const formData = new FormData();
    formData.append('title', title);
    files.forEach(file => formData.append('galleryImages', file));

    // this.galleryService.uploadGallery(formData).subscribe({
    //   next: () => this.closeDialog()
    // });
  }

  submit() {
    // Optional: trigger upload manually
  }

  closeDialog() {
    this.visible = false;
    this.closed.emit();
  }
}
