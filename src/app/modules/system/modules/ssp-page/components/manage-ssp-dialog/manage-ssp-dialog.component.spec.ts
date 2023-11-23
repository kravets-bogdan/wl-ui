import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSspDialogComponent } from './manage-ssp-dialog.component';

describe('ManageSspDialogComponent', () => {
	let component: ManageSspDialogComponent;
	let fixture: ComponentFixture<ManageSspDialogComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ManageSspDialogComponent],
		});
		fixture = TestBed.createComponent(ManageSspDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
