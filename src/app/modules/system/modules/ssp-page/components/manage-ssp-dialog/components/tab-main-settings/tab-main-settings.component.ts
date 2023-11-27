import { ChangeDetectionStrategy, Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ESvgIcons } from '@wl/core/enums/svg-icons.enum';
import { Observable, map, startWith } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
	selector: 'wl-tab-main-settings',
	templateUrl: './tab-main-settings.component.html',
	styleUrls: ['./tab-main-settings.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabMainSettingsComponent implements OnInit {
	readonly ICONS = ESvgIcons;
	isCopied: boolean = false;
	isDelete: boolean = false;
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
	@Input() tabData: any;

	constructor(
		private readonly fb: FormBuilder,
		private readonly cdr: ChangeDetectorRef,
		private clipboard: Clipboard,
	) {}

	ngOnInit(): void {
		if (this.tabData?.isDelete) {
			this.isDelete = this.tabData.isDelete;
		}
		this.initForm();
		this.filteredManagers = this.form.controls['acountManager'].valueChanges.pipe(
			startWith(''),
			map(manager => (manager ? this._filterStates(manager) : this.managers.slice())),
		);
	}

	public submit(): void {
		this.validateForm();
		if (this.form.valid) {
			this.form.disable();
		}
	}

	public validateForm(): void {
		this.form.markAllAsTouched();
		this.cdr.detectChanges();
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.form.controls[controlName];
		return control.invalid && (control.dirty || control.touched);
	}

	copyId(copyItem: string): void {
		this.clipboard.copy(copyItem);
		this.isCopied = true;
		setTimeout(() => {
			this.isCopied = false;
			this.cdr.detectChanges();
		}, 3000);
	}

	private _filterStates(value: string): any {
		const filterValue = value.toLowerCase();
		return this.managers.filter(manager => manager.name.toLowerCase().includes(filterValue));
	}

	private initForm(): void {
		this.form = this.fb.group({
			name: [
				{ value: '', disabled: this.isDelete },
				Validators.compose([Validators.required, Validators.maxLength(70)]),
			],
			domain: [
				{ value: '', disabled: this.isDelete },
				Validators.compose([Validators.required, Validators.pattern(/^[^\/:.,]+$/)]),
			],
			id: [{ value: '', disabled: this.isDelete }],
			state: [{ value: true, disabled: this.isDelete }, Validators.required],
			acountManager: [{ value: '', disabled: this.isDelete }],
			baseCommission: [
				{ value: '', disabled: this.isDelete },
				Validators.compose([Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
			],
			integrationType: [{ value: '', disabled: this.isDelete }, Validators.required],
			defaultCurrency: [{ value: '', disabled: this.isDelete }, Validators.required],
			isConfidential: [{ value: false, disabled: this.isDelete }, Validators.required],
			limit: [{ value: '', disabled: this.isDelete }, Validators.required],
		});
	}
}
