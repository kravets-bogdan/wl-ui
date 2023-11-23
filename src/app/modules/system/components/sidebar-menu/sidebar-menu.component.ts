import { Component, OnInit } from '@angular/core';
import { MenuViewItem, NetworkMenu } from './sidebar-menu.models';

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
	menu: MenuViewItem[] = NetworkMenu;

	ngOnInit(): void {}
}
