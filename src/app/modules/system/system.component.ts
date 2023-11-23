import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ESvgIcons } from '@wl/core';

@Component({
	selector: 'wl-system',
	templateUrl: './system.component.html',
	styleUrls: ['./system.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemComponent {
	readonly ICONS = ESvgIcons;
}
