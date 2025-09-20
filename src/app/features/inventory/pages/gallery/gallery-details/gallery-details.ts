import { GalleryDto, GalleryItemDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-gallery-details',
  imports: [
    CardModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './gallery-details.html'
})
export class GalleryDetails implements OnInit{
  galleryId!: number;
  gallery!: GalleryDto ;
  editingGalleryId: number | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.galleryId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGallery(this.galleryId);
  }

  loadGallery(id: number): void {
    this.galleryService.getById(this.galleryId).subscribe({
      next: res => {
        console.log(res)
        if(res.success){
          this.gallery = res.data as GalleryDto
        }
      },
      error : err => console.log(err)
    });
  }

  getGalleryImage(gallery: GalleryDto): string {
    return (gallery?.thumbImagePath ?? '')?.replace('~','https://localhost:7280');
  }

  getItemImage(item: GalleryItemDto): string {
    return (item?.thumbImagePath ?? '')?.replace('~','https://localhost:7280');
  }

  markAsTitle(itemId: number): void {
    this.galleryService.setGalleryThumb(itemId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          detail: res.message || 'Marked as title successfully',
          life: 3000
        });
        this.loadGallery(this.galleryId);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to mark item as title',
          life: 3000
        });
      }
    });
  }


  removeGalleryItem(itemId: number): void {
    this.confirmationService.confirm({
      header: 'Delete Item',
      message: 'Are you sure you want to delete this gallery item?',
      icon: 'pi pi-trash',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.galleryService.deleteGalleryItem(itemId).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: res.message || 'Gallery item deleted successfully',
              life: 3000
            });

            this.loadGallery(this.galleryId);
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err?.error?.message || 'Failed to delete gallery item',
              life: 3000
            });
          }
        });
      }
    });
  }


  deleteGallery(id: number) {
  this.confirmationService.confirm({
    header: 'Delete Gallery',
    message: 'This action will permanently delete the gallery and all its associated items. Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Delete',
    rejectLabel: 'Cancel',
    acceptButtonStyleClass: 'p-button-danger',
    rejectButtonStyleClass: 'p-button-secondary',
    accept: () => {
      this.galleryService.delete(id).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: res.message || 'Gallery deleted successfully',
            life: 3000
          });

          this.router.navigate(['/inventory/gallery/list']);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.error?.message || 'Failed to delete gallery',
            life: 3000
          });
        }
      });
    }
  });
  }


  enableEdit(gallery: GalleryDto): void {
    this.editingGalleryId = gallery.id;
    this.editedTitle = gallery.title;
  }

  updateGalleryTitle(dto: GalleryDto): void {
  const trimmed = this.editedTitle.trim();

  if (!trimmed) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Validation',
      detail: 'Title cannot be empty',
      life: 3000
    });
    return;
  }

  if (trimmed === this.gallery.title) {
    this.messageService.add({
      severity: 'info',
      summary: 'No Change',
      detail: 'Title is unchanged',
      life: 3000
    });
    return;
  }

  dto.title = trimmed;

  this.galleryService.updateTitle(dto.id, dto).subscribe({
    next: (res) => {
      console.log(res)
      this.editingGalleryId = null;
      this.editedTitle = '';
      this.loadGallery(this.galleryId);
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
        detail: err?.error?.message || 'Failed to update title',
        life: 3000
      });
    }
  });
}

}
