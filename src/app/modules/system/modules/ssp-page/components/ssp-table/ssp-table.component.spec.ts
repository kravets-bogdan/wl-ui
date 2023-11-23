import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspTableComponent } from './ssp-table.component';

describe('SspTableComponent', () => {
	let component: SspTableComponent;
	let fixture: ComponentFixture<SspTableComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SspTableComponent],
		});
		fixture = TestBed.createComponent(SspTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
