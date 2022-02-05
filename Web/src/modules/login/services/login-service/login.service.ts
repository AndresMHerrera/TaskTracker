import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    login(): Observable<any> {
        this.isLoggedIn.next(true);
        return of(this.isLoggedIn.getValue());
    }

    test(): void {
        console.log("test()===========");
        console.log(this.isLoggedIn.getValue());
        console.log(this.isLoggedIn.observers.length);
    }
}
