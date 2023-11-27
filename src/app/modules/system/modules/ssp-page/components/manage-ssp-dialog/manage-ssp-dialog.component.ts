import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ESvgIcons } from '@wl/core/enums/svg-icons.enum';

@Component({
	selector: 'up-wl-manage-ssp-dialog',
	templateUrl: './manage-ssp-dialog.component.html',
	styleUrls: ['./manage-ssp-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageSspDialogComponent {
	readonly ICONS = ESvgIcons;
	isDelete: boolean = false;
	@ViewChild(TabGroupComponent) tabGroupComponent!: TabGroupComponent;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
		if (this.data?.isDelete) {
			this.isDelete = this.data.isDelete;
		}
	}

	callSubmitInTabMainSettings(): void {
		this.tabGroupComponent.callSubmitInTabMainSettings();
	}
}
