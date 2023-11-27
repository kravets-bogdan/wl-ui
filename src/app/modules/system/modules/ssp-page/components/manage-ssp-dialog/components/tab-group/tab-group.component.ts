import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { ESvgIcons } from '@wl/core/enums/svg-icons.enum';
import { TabMainSettingsComponent } from '../tab-main-settings/tab-main-settings.component';

@Component({
	selector: 'wl-tab-group',
	templateUrl: './tab-group.component.html',
	styleUrls: ['./tab-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent {
	readonly ICONS = ESvgIcons;
	@Input() data: any;
	@ViewChild(TabMainSettingsComponent) tabMainSettingsComponent!: TabMainSettingsComponent;

	callSubmitInTabMainSettings(): void {
		this.tabMainSettingsComponent.submit();
	}

	validateForm(): void {
		this.tabMainSettingsComponent.validateForm();
	}
}
