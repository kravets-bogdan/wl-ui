import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';

type Noop<T = unknown> = (value?: T) => void;

// eslint-disable-next-line no-empty, @typescript-eslint/no-empty-function
const noop: Noop = () => {};

@Directive()
export class ValueAccessor<T> implements ControlValueAccessor {
	@Input()
	get disabled(): boolean {
		return this._disabled;
	}

	set disabled(value: boolean) {
		this._disabled = coerceBooleanProperty(value);
	}
	protected _disabled: boolean = false;
	@HostListener('blur') onBlur(): void {
		this.onTouched();
	}
	@Input()
	get value(): T | null {
		return this._value;
	}
	set value(value: T | null) {
		this._value = value;
	}
	protected _value: T | null = null;
	@Output() valueChange: EventEmitter<T | null> = new EventEmitter<T | null>();

	onChange: Noop<T> = noop;
	onTouched: Noop = noop;
	writeValue(value: T): void {
		if (value !== this.value) {
			this.value = value;
		}
	}

	registerOnChange(fn: Noop<T>): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: Noop): void {
		this.onTouched = fn;
	}

	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}
}
export function makeProvider(Component: ComponentType<any>): Provider {
	return {
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => Component),
		multi: true,
	};
}
