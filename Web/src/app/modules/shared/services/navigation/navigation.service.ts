import { APP_ROUTES } from './app-routes';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(private router: Router) {}

    public gotToDashboard() {
        this.router.navigate([APP_ROUTES.auth + '/' + APP_ROUTES.dashboard])
    }
    public gotToSignup() {
        this.router.navigate([APP_ROUTES.signup])
    }
}
