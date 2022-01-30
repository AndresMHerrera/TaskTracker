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

    constructor(httpClient: HttpClient) {
        super(httpClient, 'projects');
    }

    getProjects(): Observable<ProjectModel[]> {
        return this.get().pipe(map(json => ))
    }


}
