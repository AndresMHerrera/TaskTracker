import { LoginService } from './../modules/login/services/login-service/login.service';
import { NavigationService } from './../modules/shared/services/navigation/navigation.service';
import { TabModel } from './../modules/layout/models/tab.model';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Web';
  showFiller: boolean = true;
  tabs: TabModel[] = [];
  @ViewChild('drawer') matDrawer: MatDrawer;

  constructor(
    private navService: NavigationService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tabs.push(
      new TabModel('Dashboard', () => this.navService.gotToDashboard())
    );
    this.tabs.push(
      new TabModel('Projects', () => this.navService.goToProjects())
    );
    this.tabs.push(
      new TabModel('Tickets', () => this.navService.gotToDashboard())
    );
  }

  ngAfterViewInit() {
    this.loginService.isloggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.matDrawer.open();
      } else {
        this.matDrawer.close();
      }
    });
  }

  onLogout(): void {
    this.loginService.logout().subscribe((response) => {
      this.navService.goToLogin();
    });
  }
}
