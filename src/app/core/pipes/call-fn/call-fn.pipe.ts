import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'callFn',
})
export class CallFnPipe implements PipeTransform {
	transform(value: (...args: any) => any, ...args: unknown[]): any {
		return value(...args);
	}
}
