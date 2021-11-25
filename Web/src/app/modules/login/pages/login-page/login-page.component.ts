import { APP_ROUTES } from './../../../../app-routes';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {}

    onSignUp() {
        this.loginService.test();
        this.router.navigate([APP_ROUTES.signup])
    }

    onLogin() {
        this.loginService.login().subscribe(
            (result) => {
                console.log(result);
                this.router.navigate([APP_ROUTES.dashboard]);
            },
            (error) => {
                console.error("ERROR");
            },
            () => {
                console.warn("COMPLETE");
            }
        )
    }
}
