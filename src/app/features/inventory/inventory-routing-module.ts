import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductStockComponent } from './components/product-stock-component';

const routes: Routes = [
  { path: 'stock/:id', component: ProductStockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
