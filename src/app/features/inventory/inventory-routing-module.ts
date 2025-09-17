import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryList } from './pages/gallery/gallery-list/gallery-list';
import { GalleryDetails } from './pages/gallery/gallery-details/gallery-details';

const routes: Routes = [
  { path: 'gallery/list', component: GalleryList },
  { path: 'gallery/details/:id', component: GalleryDetails }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
