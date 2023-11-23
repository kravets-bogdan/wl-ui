import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspNoRecordsComponent } from './ssp-no-records.component';

describe('SspNoRecordsComponent', () => {
	let component: SspNoRecordsComponent;
	let fixture: ComponentFixture<SspNoRecordsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SspNoRecordsComponent],
		});
		fixture = TestBed.createComponent(SspNoRecordsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
