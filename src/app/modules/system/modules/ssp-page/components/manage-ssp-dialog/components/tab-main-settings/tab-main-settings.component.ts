import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ESvgIcons } from '@wl/core/enums/svg-icons.enum';
import { Observable, map, startWith } from 'rxjs';

@Component({
	selector: 'wl-tab-main-settings',
	templateUrl: './tab-main-settings.component.html',
	styleUrls: ['./tab-main-settings.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabMainSettingsComponent {
	readonly ICONS = ESvgIcons;
	form!: FormGroup;
	filteredManagers: Observable<any>;
	managers: any[] = [
		{
			name: 'Alexander Copperfield',
			value: 'manager',
		},
		{
			name: 'Bincoln Philips',
			value: 'saab',
		},
		{
			name: 'Carcus Dorwart',
			value: 'mercedes',
		},
		{
			name: 'Daren Siphron',
			value: 'audi',
		},
	];

	constructor(private readonly fb: FormBuilder, private readonly cdr: ChangeDetectorRef) {
		this.initForm();
		this.filteredManagers = this.form.controls['acountManager'].valueChanges.pipe(
			startWith(''),
			map(manager => (manager ? this._filterStates(manager) : this.managers.slice())),
		);
	}

	public submit() {
		this.validateForm();
		if (this.form.valid) {
			this.form.disable();
		}
	}

	public validateForm() {
		this.form.markAllAsTouched();
		this.cdr.detectChanges();
	}

	isControlInvalid(controlName: string) {
		const control = this.form.controls[controlName];
		return control.invalid && (control.dirty || control.touched);
	}

	private _filterStates(value: string): any {
		const filterValue = value.toLowerCase();
		return this.managers.filter(manager => manager.name.toLowerCase().includes(filterValue));
	}

	private initForm() {
		this.form = this.fb.group({
			name: ['', Validators.compose([Validators.required, Validators.maxLength(70)])],
			domain: ['', Validators.compose([Validators.required, Validators.pattern(/^[^\/:.,]+$/)])],
			id: [''],
			state: [true, Validators.required],
			acountManager: [''],
			baseCommission: ['', Validators.compose([Validators.required, Validators.pattern(/^[1-9]\d*$/)])],
			integrationType: ['', Validators.required],
			defaultCurrency: ['', Validators.required],
			isConfidential: [false, Validators.required],
			limit: ['', Validators.required],
			limitEurope: ['', Validators.required],
			limitEastCost: ['', Validators.required],
			limitAsia: ['', Validators.required],
		});
	}
}
