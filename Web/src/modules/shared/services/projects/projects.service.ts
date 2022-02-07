import { AppConfigService } from './../app-config/app-config.service';
import { ProjectModel } from './../../../projects/models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from './../base/base-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends BaseHttpService {
  constructor(httpClient: HttpClient, appConfig: AppConfigService) {
    super(httpClient, appConfig, 'projects');
  }

  getProjects(): Observable<ProjectModel[]> {
    return this.get().pipe(
      map((json) => this.deserialize(json) as ProjectModel[])
    );
  }

  // TODO: REMOVE
  private deserialize(json: any): ProjectModel | ProjectModel[] {
    if (Array.isArray(json)) {
      return json.map((item) => new ProjectModel(item));
    } else {
      return new ProjectModel(json);
    }
  }
}
