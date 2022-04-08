import { ProjectDetailsPageComponent } from './../modules/projects/pages/project-details-page/project-details-page.component';
import { ProjectsPageComponent } from './../modules/projects/pages/projects-page/projects-page.component';
import { DashboardPageComponent } from './../modules/dashboard/dashboard-page/dashboard-page.component';
import { SignupPageComponent } from './../modules/signup/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './../modules/login/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const indexRoute: Route = {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
};

const fallbackRoute: Route = {
  path: '**',
  redirectTo: 'login',
};

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'projects',
    canActivate: [],
    children: [
      {
        path: '',
        component: ProjectsPageComponent,
      },
      {
        path: ':id',
        component: ProjectDetailsPageComponent,
      },
    ],
  },
  indexRoute,
  fallbackRoute,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
