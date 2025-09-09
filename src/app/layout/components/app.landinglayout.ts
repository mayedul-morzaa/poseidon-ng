import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarWidget } from '@/pages/landing/components/topbarwidget';
import { RouterModule } from '@angular/router';
import { FooterWidget } from '@/pages/landing/components/footerwidget';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '@/layout/service/layout.service';

@Component({
    selector: 'app-landing-layout',
    standalone: true,
    imports: [CommonModule, TopbarWidget, RouterModule, FooterWidget, AppConfigurator],
    template: ` <div class="w-full min-h-screen">
        <topbar-widget />
        <main>
            <router-outlet />
        </main>
        <footer-widget />
        <button class="layout-config-button config-link" (click)="layoutService.toggleConfigSidebar()">
            <i class="pi pi-cog"></i>
        </button>
        <app-configurator location="landing" />
    </div>`
})
export class LandingLayout {
    layoutService: LayoutService = inject(LayoutService);
}
