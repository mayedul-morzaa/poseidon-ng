import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CustomBreadcrumbService } from '../service/custom.breadcrumb.service';


@Component({
  selector: 'custom-breadcrumb',
  imports: [CommonModule,RouterModule,BreadcrumbModule],
  template: `<p-breadcrumb [model]="breadcrumbService.breadcrumbItems" [home]="breadcrumbService.breadcrumbHome"></p-breadcrumb>`,
  styles: ``
})
export class CustomBreadcrumb {
  constructor(public breadcrumbService: CustomBreadcrumbService){}
}
