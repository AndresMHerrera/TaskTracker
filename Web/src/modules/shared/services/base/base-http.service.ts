import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class BaseHttpService {
    constructor(private httpClient: HttpClient, private baseUrl: string) {}

    protected get(url?: string): Observable<any> {
        return this.httpClient.get(this.buildUrl(url), {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }

    private buildUrl(endpoint?: string): string {
        if (endpoint) {
            return `${this.baseUrl}\\${endpoint}`;
        }
        else {
            return this.baseUrl;
        }
    }
}
