import { APP_ROUTES } from './../../app-routes';

import { Route } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

export const SignupRouterConfig: Route[] = [
    {
        path: APP_ROUTES.signup,
        component: SignupPageComponent
    }
    // {
    //     path: ROUTE_PATHS.INVITE,
    //     component: InviteTeamMembersComponent
    // }
];
