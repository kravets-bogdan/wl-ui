import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { ESvgIcons, SSP, SSPResponse } from '@wl/core';
import { UtilsService } from '@wl/core/services';
import { ManageSspDialogComponent } from '../manage-ssp-dialog/manage-ssp-dialog.component';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: SSP[] = [
	{
		id: 1,
		name: 'Vova first ssp',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: 1,
	},
	{
		id: 2,
		name: 'Vova second ssp',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: 1,
	},
	{
		id: 3,
		name: 'Vova 3rd ssp',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: 1,
	},
	{
		id: 4,
		name: 'Vova 4th ssp',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: 1,
	},
	{
		id: 6,
		name: 'API created ssp 1',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: -1,
	},
	{
		id: 5,
		name: 'API create ssp modified',
		qps: 0,
		bidPerformance: 0,
		impressionRate: 0,
		status: 1,
	},
];

@Component({
	selector: 'wl-ssp-table',
	templateUrl: './ssp-table.component.html',
	styleUrls: ['./ssp-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SspTableComponent implements OnInit, AfterViewInit {
	@Input() public tableData: SSPResponse;

	readonly ICONS = ESvgIcons;
	displayedColumns: string[] = ['id', 'name', 'qps', 'bidPerformance', 'impressionRate', 'status', 'action'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);

	constructor(private _liveAnnouncer: LiveAnnouncer, public utilsService: UtilsService) {}

	@ViewChild(MatSort) sort: MatSort;

	public ngOnInit() {
		const tableData2 = this.tableData.data;
		console.log('this.tableData', this.tableData.data);
	}

	public ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}

	announceSortChange(sortState: Sort) {
		if (sortState.direction) {
			this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
		} else {
			this._liveAnnouncer.announce('Sorting cleared');
		}
	}

	editRow(element: any) {
		this.utilsService.openDialog(ManageSspDialogComponent, { width: '760px', data: element });
	}

	deleteRow(element: any) {
		this.utilsService.openDialog(ManageSspDialogComponent, {
			width: '760px',
			data: {
				element,
				isDelete: true,
			},
		});
	}
}
