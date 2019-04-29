import {Component, OnInit} from '@angular/core';

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/room', title: 'Classrooms', icon: 'ti-bookmark-alt', class: ''},
  {path: '/organism', title: 'Organismes', icon: 'ti-bag', class: ''},
  {path: '/list-types', title: 'Types', icon: 'ti-settings', class: ''},
  {path: '/list-reservations', title: 'Reservations', icon: 'ti-layout-accordion-list', class: ''},


];

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
