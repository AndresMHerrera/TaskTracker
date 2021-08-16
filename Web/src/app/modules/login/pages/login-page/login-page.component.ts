import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private loginService: LoginService) {}

    ngOnInit(): void {}

    onSignUp() {
        this.loginService.test();
    }

    onLogin() {
        this.loginService.login().subscribe(
            (result) => {
                console.log(result);
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
