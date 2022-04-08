import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(private router: Router) {}

  public goToLogin(): Promise<boolean> {
    return this.router.navigate(['login']);
  }

    public gotToSignup(): Promise<boolean> {
        return this.router.navigate(['signup']);
    }

    public gotToDashboard(): Promise<boolean> {
        return this.router.navigate(['dashboard']);
    }

    public goToProjects(): Promise<boolean> {
        return this.router.navigate(['projects']);
    }

    public goToProjectDetails(id: number): Promise<boolean> {
      return this.router.navigate([`projects`, id]);
    }
}
