import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'wl-ssp-no-records',
	templateUrl: './ssp-no-records.component.html',
	styleUrls: ['./ssp-no-records.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SspNoRecordsComponent {}
