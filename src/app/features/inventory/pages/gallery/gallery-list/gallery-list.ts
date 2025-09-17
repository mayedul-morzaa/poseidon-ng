import { EntityStatusEnum, EntityStatusLabels } from '@/core/enums/entity-status.enum';
import { GalleryDto } from '@/features/inventory/models/gallery.model';
import { GalleryService } from '@/features/inventory/services/gallery.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-gallery-list',
  imports: [
    TableModule,
    SelectModule,
    MultiSelectModule,
    IconFieldModule,
    SliderModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    TagModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RouterLink
  ],
  templateUrl: './gallery-list.html'
})
export class GalleryList implements OnInit{
  
  galleries : GalleryDto[] = [];
  loading: boolean = true;
  @ViewChild('filter') filter!: ElementRef;

  statuses = Object.keys(EntityStatusEnum)
  .filter(key => !isNaN(Number(key)))
  .map(key => {
    const value = Number(key) as EntityStatusEnum;
    return {
      label: EntityStatusLabels[value],
      value: value
    };
  });

  private galleryService = inject(GalleryService);
  ngOnInit(): void {
    this.getAllGallery();
  }

  getAllGallery(){
    this.galleryService.getAll().subscribe({
      next : res => {
        if(res.success){
          this.galleries = res.data as GalleryDto[];
          this.loading = false;
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

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
      table.clear();
      this.filter.nativeElement.value = '';
  }
}
