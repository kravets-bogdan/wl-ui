import { Pipe, PipeTransform } from '@angular/core';
import { Sort, SortDirection } from '@angular/material/sort';
import { ISortableParams } from '@wl/core';

@Pipe({
	name: 'apiToMatSortParamAdapter',
	standalone: true,
})
export class ApiMaterialSortParamAdapterPipe implements PipeTransform {
	static transform(params: ISortableParams | null): Sort {
		let direction: SortDirection = '';
		let active: string = '';
		if (params !== null) {
			if (params.ascending !== null) {
				direction = params.ascending ? 'asc' : 'desc';
			}
			active = <string>(params.sortingSecondPropertyName || params.sortingPropertyName || '');
		}
		return { active, direction };
	}

	transform(params: ISortableParams | null): Sort {
		return ApiMaterialSortParamAdapterPipe.transform(params);
	}
}
