import { APP_ROUTES } from '../shared/services/navigation/app-routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Route } from "@angular/router";

export const LoginRouterConfig: Route[] = [
    {
        path: APP_ROUTES.login,
        component: LoginPageComponent
    }
];
