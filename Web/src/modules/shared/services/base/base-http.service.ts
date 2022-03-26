import { AppConfigService } from './../app-config/app-config.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseHttpService {

  private apiBaseUrl: string;

  constructor(
    private httpClient: HttpClient,
    private appConfigService: AppConfigService,
    private endpointUrl: string
  ) {
    this.apiBaseUrl = this.appConfigService.getSettings().apiBaseUrl;
  }

  protected get(url?: string): Observable<any> {
    return this.httpClient.get(this.buildUrl(url), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  protected post<T>(url: string, payload: T): Observable<any> {
    return this.httpClient.post(this.buildUrl(url), payload);
  }

  private buildUrl(url:string | undefined): string {
    let result = `${this.apiBaseUrl}/${this.endpointUrl}`;
    if (url) {
      result = result + `/${url}`;
    }
    return result;
  }
}
