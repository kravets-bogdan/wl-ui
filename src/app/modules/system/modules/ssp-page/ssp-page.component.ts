import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ESvgIcons, SSPResponse } from '@wl/core';
import { UtilsService } from '@wl/core/services/utils.service';
import { SspPageService } from '@wl/modules/system/modules/ssp-page/ssp-page.service';
import { ManageSspDialogComponent } from './components/manage-ssp-dialog/manage-ssp-dialog.component';

@Component({
	selector: 'app-ssp-page',
	templateUrl: './ssp-page.component.html',
	styleUrls: ['./ssp-page.component.scss'],
	providers: [UtilsService],
})
export class SspPageComponent implements OnInit {
	readonly ICONS = ESvgIcons;
	public tabs: any[] = [
		{
			title: 'Active & Paused',
		},
		{
			title: 'Removed',
		},
	];
	selectedTabIndex: number = 0;
	foods: any[] = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' },
	];
	public tableData: SSPResponse;

	constructor(public sspService: SspPageService, public utilsService: UtilsService) {}

	public ngOnInit(): void {
		this.tableData = this.sspService.getTableData();
		console.log('selectedTabIndex', this.selectedTabIndex);
	}

	public onTabChange(event: MatTabChangeEvent) {
		this.selectedTabIndex = event.index;
	}

	openDialog() {
		this.utilsService.openDialog(ManageSspDialogComponent, { width: '760px' });
	}
}
