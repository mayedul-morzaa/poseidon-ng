import { Injectable } from '@angular/core';
import { MasterService } from '@/core/services/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '@/core/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class StoreLocationService {
  private readonly endpoint = 'admin/store-locations';

  constructor(private masterService: MasterService) {}

  getAll(): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}`);
  }

  getById(id: number): Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/get/${id}`);
  }

  create(data: FormData): Observable<ApiResponse> {
    return this.masterService.post<ApiResponse>(`${this.endpoint}/create`, data);
  }

  update(id: number, data: FormData): Observable<ApiResponse> {
    return this.masterService.put<ApiResponse>(`${this.endpoint}/update/${id}`, data);
  }

  delete(id: number): Observable<ApiResponse> {
    return this.masterService.delete<ApiResponse>(`${this.endpoint}/delete/${id}`);
  }  
}
