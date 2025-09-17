import { GalleryDto, GalleryItemDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

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
  gallery!: GalleryDto;
  editingGalleryId: number | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
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
    return 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg';
  }

  getItemImage(item: GalleryItemDto): string {
    return 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg';
  }

  markAsTitle(item: GalleryItemDto): void {
  }

  removeItem(itemId: any): void {
  }

  deleteGallery(galleryId: number): void {
  }

  enableEdit(gallery: GalleryDto): void {
    this.editingGalleryId = gallery.id;
    this.editedTitle = gallery.title;
  }

  updateGalleryTitle(id: number): void {
      this.editingGalleryId = null;
      this.editedTitle = '';
  }
}
