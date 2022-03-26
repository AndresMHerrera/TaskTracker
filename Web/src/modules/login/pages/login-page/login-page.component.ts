import { LoginModel } from './../../models/login.model';
import { NavigationService } from './../../../shared/services/navigation/navigation.service';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {}

  onSignUp() {
    this.loginService.test();
    this.navigation.gotToSignup();
  }

  onLogin() {
    let payload: LoginModel = new LoginModel({
      username: "test",
      password: "test"
    });

    this.loginService.login(payload).subscribe(
      (result) => {
        console.log('ok', result);
        this.navigation.gotToDashboard();
      },
      (error) => {
        console.error('ERROR', error);
      },
      () => {
        console.warn('COMPLETE');
      }
    );
  }
}
