import { Pipe, PipeTransform } from '@angular/core';

type PrefixValue = '+' | null;

@Pipe({
	name: 'numberComparison',
})
export class NumberComparisonPipe implements PipeTransform {
	transform(
		value: number | undefined | null,
		compareTo: number = 0,
	): {
		isPriceUp: boolean;
		isPriceDown: boolean;
		isPriceSame: boolean;
		hasValue: boolean;
		value: number;
		prefixValue: PrefixValue;
	} | null {
		if (value === undefined || value === null) {
			return null;
		}
		const isPriceDown: boolean = value < compareTo;
		const isPriceUp: boolean = value > compareTo;
		let prefixValue: PrefixValue = null;
		if (isPriceUp) {
			prefixValue = '+';
		}
		return {
			value,
			isPriceUp,
			isPriceDown,
			prefixValue,
			hasValue: true,
			isPriceSame: value === compareTo,
		};
	}
}
