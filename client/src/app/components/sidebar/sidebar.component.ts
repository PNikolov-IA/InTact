import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/table-reports/all', title: 'Table Reports', icon: 'table_chart', class: '' },
    { path: '/chart-reports/all', title: 'Chart Reports', icon: 'insert_chart', class: '' },
    { path: '/devices/all', title: 'Devices', icon: 'router', class: '' },
    { path: '/users/all', title: 'Users', icon: 'person', class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(
        private readonly authService: AuthService
    ) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => {
            if (
                (!this.authService.isAdmin() && menuItem.title === 'Users') ||
                (!this.authService.isAdmin() && menuItem.title === 'Devices')
            ) {
                return;
            }

            return menuItem;
        });
    }

    logout() {
        this.authService.logout();
    }
}
