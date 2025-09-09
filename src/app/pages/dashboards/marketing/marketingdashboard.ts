import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesPerformanceWidget} from '@/pages/dashboards/marketing/components/salesperformancewidget';
import {InventoryManagementWidget} from '@/pages/dashboards/marketing/components/inventorymanagementwidget';
import {PromotionCampaignWidget} from '@/pages/dashboards/marketing/components/promotioncampaignwidget';
import {EmailDataChartWidget} from '@/pages/dashboards/marketing/components/emaildatachartwidget';
import {AudienceByGenderWidget} from "@/pages/dashboards/marketing/components/audiencebygenderwidget";
import {GlobalRankWidget} from "@/pages/dashboards/marketing/components/globalrankwidget";
import {VisitByDeviceWidget} from "@/pages/dashboards/marketing/components/visitbydevicewidget";
import {EmailHistoryWidget} from "@/pages/dashboards/marketing/components/emailhistorywidget";

@Component({
    selector: 'marketing-dashboard',
    standalone: true,
    imports: [CommonModule, SalesPerformanceWidget, InventoryManagementWidget, PromotionCampaignWidget, EmailDataChartWidget, AudienceByGenderWidget, GlobalRankWidget, VisitByDeviceWidget, EmailHistoryWidget],
    template: `
        <div class="flex flex-col gap-6">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <sales-performance-widget/>
                <inventory-management-widget/>
                <promotion-campaign-widget/>
                <email-data-chart-widget/>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <audience-by-gender-widget/>
                <global-rank-widget/>
                <visit-by-device-widget/>
            </div>
            <email-history-widget/>
        </div>`
})
export class MarketingDashboard {
}
