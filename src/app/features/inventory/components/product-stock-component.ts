import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product, ProductService } from '../services/product-service';
import { TitleService } from '@/core/services/title.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-stock-component',
  imports: [CommonModule],
  template: `
    <div *ngIf="product">
      <h2>Stock of {{ product.name }}</h2>
      <p>Available stock: {{ product.stock}}</p>
    </div>
    <div *ngIf="!product">
      <p>Product not found!</p>
    </div>
  `,
  styles: ``
})
export class ProductStockComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(p => {
          this.product = p;
          if (p) {
            this.titleService.setTitle(`Stock of ${p.name}`);
          } else {
            this.titleService.setTitle('Product not found');
          }
        });
    } else {
      this.titleService.setTitle('Stock');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.titleService.clearTitle();
  }
}
