import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[wlOnlyIntegerNumber]',
})
export class OnlyIntegerNumberDirective {
	constructor(private el: ElementRef) {}

	@HostListener('input', ['$event'])
	onInput(event: any) {
		const inputValue: string = event.target.value;
		const sanitizedValue = inputValue.replace(/\D/g, '');
		this.el.nativeElement.value = sanitizedValue;
	}
}
