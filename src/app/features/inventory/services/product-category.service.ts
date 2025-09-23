import { ApiResponse } from '@/core/models/api-response.model';
import { MasterService } from '@/core/services/master.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private readonly endpoint = 'admin/product-categories';

  constructor(private masterService: MasterService) {}

  // Get all categories
  getAll(): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}`);
  }

  // Get category by ID
  getById(id: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/get/${id}`);
  }

  // Create new category
  create(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/create`, data);
  }

  // Update existing category
  update(id: number, data: FormData): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/update/${id}`, data);
  }

  // Delete category
  delete(id: number): Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/delete/${id}`);
  }

    // ======== get product category by level
  getCategoriesByLevel(level: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/level/${level}`);
  }
}
