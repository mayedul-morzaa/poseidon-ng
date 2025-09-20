import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, Toast, ConfirmDialog],
    template: `
    <p-toast></p-toast>
    <p-confirmdialog [style]="{ width: '450px' }"></p-confirmdialog>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  
}
