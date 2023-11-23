import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '@wl/core/services';

@Pipe({
	name: 'truncateString',
})
export class TruncateStringPipe implements PipeTransform {
	constructor(private readonly utilsService: UtilsService) {}
	transform(str: string, length: number = 11): unknown {
		return this.utilsService.truncateString(str, length);
	}
}
