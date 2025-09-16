import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryList } from './pages/gallery/gallery-list/gallery-list';

const routes: Routes = [
  { path: 'gallery/list', component: GalleryList }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
