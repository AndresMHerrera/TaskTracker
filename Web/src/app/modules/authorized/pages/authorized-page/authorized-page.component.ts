import { NavigationService } from './../../../shared/services/navigation/navigation.service';
import { TabModel } from './../../../layout/models/tab.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authorized-page',
    templateUrl: './authorized-page.component.html',
    styleUrls: ['./authorized-page.component.scss'],
})
export class AuthorizedPageComponent implements OnInit {
    showFiller: boolean = true;
    tabs: TabModel[] = [];

    constructor(private navService: NavigationService) {}

    ngOnInit(): void {
        this.tabs.push(new TabModel('Dashboard', this.navService.gotToDashboard));
        this.tabs.push(new TabModel('Projects', this.navService.gotToDashboard));
        this.tabs.push(new TabModel('Tickets', this.navService.gotToDashboard));
    }
}
