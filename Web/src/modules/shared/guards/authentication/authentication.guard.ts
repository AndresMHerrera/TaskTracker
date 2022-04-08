import { LoginService } from './../../../login/services/login-service/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // TODO
    // Get current user.
    // check if user is logged in.
    // If user is logged in, check roles, go to page, else redirect
    // if user is not logged in, redirect to login page

    return this.loginService.isloggedIn();
  }

}
