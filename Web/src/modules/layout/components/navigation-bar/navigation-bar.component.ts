import { TabModel } from './../../models/tab.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tt-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

    @Input() tabs: TabModel[] = [];
    activeTab: number = 0;

    constructor() {}

    ngOnInit(): void {}

    onClickTab(tab: TabModel, index: number): void {
        this.activeTab = index;
        tab.action();
    }
}
