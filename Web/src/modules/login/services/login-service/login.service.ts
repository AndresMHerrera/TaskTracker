import { AuthInfoLocalStorageModel } from './../../models/auth-info-local-storage.model';
import { LocalStorageService } from './../../../shared/services/local-storage/local-storage.service';
import { LoginResponseModel } from './../../models/login-response.model';
import { map } from 'rxjs/operators';
import { LoginModel } from './../../models/login.model';
import { AppConfigService } from './../../../shared/services/app-config/app-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/modules/shared/services/base/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseHttpService {
  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly loginKey: string = "LoginKey";

  constructor(private localStorageService: LocalStorageService, httpClient: HttpClient, appConfig: AppConfigService) {
    super(httpClient, appConfig, 'auth');
  }

  login(payload: LoginModel): Observable<LoginResponseModel> {
    return this.post('login', payload).pipe(
      map((json) => {
        let response = new LoginResponseModel(json);
        this.isLoggedIn$.next(response.isLoggedIn);
        this.updateLocalStorage(this.isLoggedIn$.getValue());
        return response;
      })
    );
  }

  logout(): Observable<LoginResponseModel> {
    return this.get('logout').pipe( // TODO: use POST
      map((json) => {
        let response = new LoginResponseModel(json);
        this.isLoggedIn$.next(response.isLoggedIn);
        this.updateLocalStorage(this.isLoggedIn$.getValue());
        return response;
      })
    );
  }

  isloggedIn(): BehaviorSubject<boolean> {

    if (!this.isLoggedIn$.getValue()) {
      let authInfo: AuthInfoLocalStorageModel | null = this.localStorageService.get(this.loginKey);
      if (authInfo && authInfo.isLoggedIn) {
        this.isLoggedIn$.next(authInfo.isLoggedIn);
        this.updateLocalStorage(this.isLoggedIn$.getValue());
      }
    }

    return this.isLoggedIn$;
  }

  private updateLocalStorage(value: boolean): void {
    let authInfo: AuthInfoLocalStorageModel | null = this.localStorageService.get(this.loginKey);
    if (!authInfo) {
      authInfo = new AuthInfoLocalStorageModel();
    }

    authInfo.isLoggedIn = value;

    this.localStorageService.save(this.loginKey, authInfo);
  }

  test(): void {
    console.log('test()===========');
  }
}
