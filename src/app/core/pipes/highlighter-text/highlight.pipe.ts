import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
	transform(value: string, query: string, flags: string = 'igm'): string {
		if (!query || !query) return value;
		const regExp = new RegExp(query, flags);
		return value.replace(regExp, '<mark>$&</mark>');
	}
}
