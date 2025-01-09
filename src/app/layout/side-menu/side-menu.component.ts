import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: false,

  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Orders', icon: 'pi pi-list', routerLink: ['/orders'] },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/settings'] },
    ];
  }
}
