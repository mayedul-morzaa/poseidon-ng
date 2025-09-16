import { ApiResponse } from '@/core/models/api-response.model';
import { MasterService } from '@/core/services/master.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly endpoint = 'galleries';

  constructor(private masterService: MasterService) {}

  // Get all galleries
  getAll(): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}`);
  }

  // Get gallery by ID
  getById(id: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/${id}`);
  }

  // Create new gallery
  create(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/create`, data);
  }

  // Update existing gallery
  update(id: number, data: FormData): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/update/${id}`, data);
  }

  // Delete gallery
  delete(id: number): Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/delete/${id}`);
  }

}
