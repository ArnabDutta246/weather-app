import { Component, OnInit } from '@angular/core';
import { appMenus } from '../shared/extra/app-menus';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  appPages = appMenus;

  constructor() { }

  ngOnInit() {
  }

}
