import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const indexRoute: Route = {
  path: '',
  component: LoginPageComponent
};

const fallbackRoute: Route = {
  path: '**',
  component: LoginPageComponent
};


const routes: Routes = [
  {
      path: 'login',
      component: LoginPageComponent
  },
  // ...signupRouterConfig,
  // {
  //     path: 'home',
  //     component: HomeComponent
  // },
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
