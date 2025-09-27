import { ApiResponse } from '@/core/models/api-response.model';
import { MasterService } from '@/core/services/master.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly endpoint = 'admin/brands';

  constructor(private masterService: MasterService) {}

  // Get all brands
  getAll(): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}`);
  }

  // Get brand by ID
  getById(id: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/get/${id}`);
  }

  // Create new brand
  create(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/create`, data);
  }

  // Update existing brand
  update(id: number, data: FormData): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/update/${id}`, data);
  }

  // Delete brand
  delete(id: number): Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/delete/${id}`);
  }
}
