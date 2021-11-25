import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { APP_ROUTES } from './../../app-routes';

import { Route } from "@angular/router";

export const DashboardRouter: Route[] = [
    {
        path: APP_ROUTES.dashboard,
        component: DashboardPageComponent
    }
];
