import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { Route } from "@angular/router";

export const DashboardRouter: Route[] = [
    {
        path: 'dashboard',
        component: DashboardPageComponent
    }
];
