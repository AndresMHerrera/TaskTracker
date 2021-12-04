import { ProjectsPageComponent } from './modules/projects/pages/projects-page/projects-page.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { AuthorizedPageComponent } from './modules/authorized/pages/authorized-page/authorized-page.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { APP_ROUTES } from './modules/shared/services/navigation/app-routes';
import { DashboardRouter } from './modules/dashboard/dashboard-router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginRouterConfig } from './modules/login/login-router.config';
import { SignupRouterConfig } from './modules/signup/signup-router.config';
import { SignupPageComponent } from './modules/signup/pages/signup-page/signup-page.component';

const indexRoute: Route = {
    path: '',
    redirectTo: APP_ROUTES.login,
    pathMatch: 'full'
};

const fallbackRoute: Route = {
    path: '**',
    redirectTo: APP_ROUTES.login
};

const routes: Routes = [
    // ...LoginRouterConfig,
    // ...SignupRouterConfig,
    // ...DashboardRouter,
    {
        path: APP_ROUTES.login,
        component: LoginPageComponent
    },
    {
        path: APP_ROUTES.signup,
        component: SignupPageComponent
    },
    {
        path: APP_ROUTES.auth,
        component: AuthorizedPageComponent,
        children: [
            {
                path: APP_ROUTES.dashboard,
                component: DashboardPageComponent
            },
            {
                path: APP_ROUTES.projects,
                component: ProjectsPageComponent
            }
        ]
    },
    indexRoute,
    fallbackRoute,
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
