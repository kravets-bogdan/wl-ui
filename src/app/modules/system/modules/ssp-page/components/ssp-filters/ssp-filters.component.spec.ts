import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspFiltersComponent } from './ssp-filters.component';

describe('SspFiltersComponent', () => {
	let component: SspFiltersComponent;
	let fixture: ComponentFixture<SspFiltersComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SspFiltersComponent],
		});
		fixture = TestBed.createComponent(SspFiltersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
