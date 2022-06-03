import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
  }  

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        
    }

    isSideNavCollapsed = false;
    screenWidth = 0;

    onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}