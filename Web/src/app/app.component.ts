import { LoginService } from './../modules/login/services/login-service/login.service';
import { NavigationService } from './../modules/shared/services/navigation/navigation.service';
import { TabModel } from './../modules/layout/models/tab.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web';
  showFiller: boolean = true;
  tabs: TabModel[] = [];

  constructor(private navService: NavigationService,
              public loginService: LoginService) {}

  ngOnInit(): void {
      this.tabs.push(new TabModel('Dashboard', () => this.navService.gotToDashboard()));
      this.tabs.push(new TabModel('Projects', () => this.navService.goToProjects()));
      this.tabs.push(new TabModel('Tickets', () => this.navService.gotToDashboard()));
  }

  onLogout(): void {
    this.loginService.logout().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
