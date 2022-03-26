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
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(httpClient: HttpClient, appConfig: AppConfigService) {
    super(httpClient, appConfig, 'auth');
  }

  login(payload: LoginModel): Observable<LoginResponseModel> {
    return this.post('login', payload).pipe(
      map((json) => {
        let response = new LoginResponseModel(json);
        this.isLoggedIn.next(response.isLoggedIn);
        return response;
      })
    );
  }

  logout(): Observable<LoginResponseModel> {
    return this.get('logout').pipe( // TODO: use POST
      map((json) => {
        let response = new LoginResponseModel(json);
        this.isLoggedIn.next(response.isLoggedIn);
        return response;
      })
    );
  }

  isloggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  test(): void {
    console.log('test()===========');
    console.log(this.isLoggedIn.getValue());
    console.log(this.isLoggedIn.observers.length);
  }
}
