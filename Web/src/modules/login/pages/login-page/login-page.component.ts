import { NavigationService } from './../../../shared/services/navigation/navigation.service';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private loginService: LoginService, private navigation: NavigationService) {}

    ngOnInit(): void {}

    onSignUp() {
        this.loginService.test();
        this.navigation.gotToSignup();
    }

    onLogin() {
        this.loginService.login().subscribe(
            (result) => {
                console.log('ok');
                this.navigation.gotToDashboard();
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
