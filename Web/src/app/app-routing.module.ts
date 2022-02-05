import { ProjectsPageComponent } from './../modules/projects/pages/projects-page/projects-page.component';
import { DashboardPageComponent } from './../modules/dashboard/dashboard-page/dashboard-page.component';
import { AuthorizedPageComponent } from './../modules/authorized/pages/authorized-page/authorized-page.component';
import { SignupPageComponent } from './../modules/signup/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './../modules/login/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const indexRoute: Route = {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
};

const fallbackRoute: Route = {
    path: '**',
    redirectTo: 'login'
};

const routes: Routes = [
    // ...LoginRouterConfig,
    // ...SignupRouterConfig,
    // ...DashboardRouter,
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'signup',
        component: SignupPageComponent
    },
    {
        path: 'auth',
        component: AuthorizedPageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardPageComponent
            },
            {
                path: 'projects',
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
