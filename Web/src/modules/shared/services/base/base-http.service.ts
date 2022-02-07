import { AppConfigService } from './../app-config/app-config.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseHttpService {

  private apiBaseUrl: string;

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfigService,
    private endpointUrl: string
  ) {
    this.apiBaseUrl = appConfig.getSettings().apiBaseUrl;
  }

  protected get(url?: string): Observable<any> {
    return this.httpClient.get(this.buildUrl(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  private buildUrl(): string {
    return `${this.apiBaseUrl}/${this.endpointUrl}`;
  }
}
