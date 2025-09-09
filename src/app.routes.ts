import {Routes} from '@angular/router';
import {AppLayout} from '@/layout/components/app.layout';
import {LandingLayout} from '@/layout/components/app.landinglayout';
import {AuthLayout} from '@/layout/components/app.authlayout';
import {Notfound} from '@/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('@/pages/dashboards/marketing/marketingdashboard').then((c) => c.MarketingDashboard),
                data: {breadcrumb: 'Marketing Dashboard'}
            },
            {
                path: 'dashboard-ecommerce',
                loadComponent: () => import('@/pages/dashboards/ecommerce/ecommercedashboard').then((c) => c.EcommerceDashboard),
                data: {breadcrumb: 'E-Commerce Dashboard'}
            },
            {
                path: 'dashboard-banking',
                loadComponent: () => import('@/pages/dashboards/banking/bankingdashboard').then((c) => c.BankingDashboard),
                data: {breadcrumb: 'Banking Dashboard'}
            },
            {
                path: 'uikit',
                data: {breadcrumb: 'UI Kit'},
                loadChildren: () => import('@/pages/uikit/uikit.routes')
            },
            {
                path: 'documentation',
                data: {breadcrumb: 'Documentation'},
                loadComponent: () => import('@/pages/documentation/documentation').then((c) => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes'),
                data: {breadcrumb: 'Pages'}
            },
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: {breadcrumb: 'Apps'}
            },

            {
                path: 'blocks',
                data: {breadcrumb: 'Free Blocks'},
                loadChildren: () => import('@/pages/blocks/blocks.routes')
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: {breadcrumb: 'E-Commerce'}
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes')
            }
        ]
    },
    {
        path: 'landing',
        component: LandingLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('@/pages/landing').then((c) => c.Landing)
            },
            {
                path: 'about',
                loadComponent: () => import('@/pages/landing/about').then((c) => c.About)
            },
            {
                path: 'pricing',
                loadComponent: () => import('@/pages/landing/pricing').then((c) => c.Pricing)
            },
            {
                path: 'contact',
                loadComponent: () => import('@/pages/landing/contact').then((c) => c.Contact)
            },
            {
                path: 'login',
                loadComponent: () => import('@/pages/auth/login').then((c) => c.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('@/pages/auth/register').then((c) => c.Register)
            },
            {
                path: 'verification',
                loadComponent: () => import('@/pages/auth/verification').then((c) => c.Verification)
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('@/pages/auth/forgotpassword').then((c) => c.ForgotPassword)
            },
            {
                path: 'new-password',
                loadComponent: () => import('@/pages/auth/newpassword').then((c) => c.NewPassword)
            },
            {
                path: 'lock-screen',
                loadComponent: () => import('@/pages/auth/lockscreen').then((c) => c.LockScreen)
            },
            {
                path: 'oops',
                loadComponent: () => import('@/pages/oops/oops').then((c) => c.Oops)
            },
            {
                path: 'access',
                loadComponent: () => import('@/pages/auth/access').then((c) => c.Access)
            },
            {
                path: 'error',
                redirectTo: '/notfound'
            }
        ]
    },
    {path: 'notfound', component: Notfound},
    {
        path: 'auth',
        component: AuthLayout,
        children: []
    },
    {path: '**', redirectTo: '/notfound'}
];
