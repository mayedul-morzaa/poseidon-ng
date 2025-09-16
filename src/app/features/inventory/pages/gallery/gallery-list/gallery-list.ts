import { GalleryDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { Component, OnInit, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-gallery-list',
  imports: [ToastModule],
  templateUrl: './gallery-list.html'
})
export class GalleryList implements OnInit{
  
  galleries : GalleryDto[] = [];

  private galleryService = inject(GalleryService);
  ngOnInit(): void {
    this.getAllGallery();
  }

  getAllGallery(){
    this.galleryService.getAll().subscribe({
      next : res => {
        if(res.success){
          this.galleries = res.data as GalleryDto[];
          console.log(res);
        }else{
          console.log(res);
          // toast here
        }
      },
      error: err => {
          console.log(err);
      }
    })
  }
}
