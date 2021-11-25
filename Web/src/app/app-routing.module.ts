import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginRouterConfig } from './modules/login/login-router.config';
import { SignupRouterConfig } from './modules/signup/signup-router.config';

const indexRoute: Route = {
  path: '',
  component: LoginPageComponent
};

const fallbackRoute: Route = {
  path: '**',
  component: LoginPageComponent
};


const routes: Routes = [
    ...LoginRouterConfig,
    ...SignupRouterConfig,
    indexRoute,
    fallbackRoute
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
