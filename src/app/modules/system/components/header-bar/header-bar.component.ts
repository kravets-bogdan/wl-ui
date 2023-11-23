import { Component } from '@angular/core';
import { ESvgIcons } from '@wl/core';

@Component({
	selector: 'app-header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
	readonly ICONS = ESvgIcons;
}
