import { ApiResponse } from '@/core/models/api-response.model';
import { MasterService } from '@/core/services/master.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryDto } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly endpoint = 'admin/galleries';

  constructor(private masterService: MasterService) {}

  // Get all galleries
  getAll(): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}`);
  }

  // Get gallery by ID
  getById(id: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/get/${id}`);
  }

  // Create new gallery
  create(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/create`, data);
  }

  // Update existing gallery
  update(id: number, data: FormData): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/update/${id}`, data);
  }

  // Update title only
  updateTitle(id: number, data: GalleryDto): Observable<ApiResponse> {
  return this.masterService.put<ApiResponse>(`${this.endpoint}/update-title/${id}`, data);
  }

  // Delete gallery
  delete(id: number): Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/delete/${id}`);
  }

  // =============== Gallery Item ===============
    // Create new gallery
  createGalleryItem(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/items/create`, data);
  }
  deleteGalleryItem(id: number) : Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/items/delete/${id}`);
  }

  setGalleryThumb(itemId: number): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/items/${itemId}/set-as-thumb`, {});
  }

  // ======== get gallery by level
  getGalleriesByLevel(level: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/level/${level}`);
  }
}
