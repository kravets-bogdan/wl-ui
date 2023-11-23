import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ESvgIcons } from '@wl/core/enums/svg-icons.enum';
import { TabGroupComponent } from './components/tab-group/tab-group.component';

@Component({
	selector: 'up-wl-manage-ssp-dialog',
	templateUrl: './manage-ssp-dialog.component.html',
	styleUrls: ['./manage-ssp-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageSspDialogComponent {
	readonly ICONS = ESvgIcons;
	@ViewChild(TabGroupComponent) tabGroupComponent!: TabGroupComponent;

	callSubmitInTabMainSettings(): void {
		this.tabGroupComponent.callSubmitInTabMainSettings();
	}
}
