import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Product1', stock: 100 },
    { id: '2', name: 'Product2', stock: 50 },
    { id: '3', name: 'Product3', stock: 75 },
  ];

  getProductById(id: string) {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
