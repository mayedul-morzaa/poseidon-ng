import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryList } from './pages/gallery/gallery-list/gallery-list';
import { GalleryDetails } from './pages/gallery/gallery-details/gallery-details';
import { ProductCategoryList } from './pages/productCategory/product-category-list/product-category-list';
import { BrandList } from './pages/brand/brand-list/brand-list';

const routes: Routes = [
  { path: 'gallery/list', component: GalleryList },
  { path: 'gallery/details/:id', component: GalleryDetails },
  { path: 'product/category/list', component: ProductCategoryList},
  { path: 'brand/list', component: BrandList }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
