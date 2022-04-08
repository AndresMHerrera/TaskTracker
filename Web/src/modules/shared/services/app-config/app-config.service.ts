import { environment } from './../../../../environments/environment';
import { AppConfigModel } from './../../models/app-config.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private settings: AppConfigModel;

  constructor(private http: HttpClient) {}

  load() {
    const jsonFile = environment.configFile;

    return this.http.get(jsonFile).pipe(
      map((json: any) => {
        this.settings = new AppConfigModel(json);
        return of(this.settings);
      })
    );
  }

  getSettings(): AppConfigModel {
    return this.settings;
  }
}
