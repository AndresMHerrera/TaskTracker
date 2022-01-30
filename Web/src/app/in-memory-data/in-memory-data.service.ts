import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {

        const projects = [
            {
                id: 0,
                name: 'Task Tracker',
                description: 'A web application for creating and managing project tasks.',
                metadata: { openTasks: 50, closedTasks: 20, totalTasks: 150 }
            }
        ];

        return { }
    }
}
