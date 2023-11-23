import { FormControl } from '@angular/forms';

export type TFormToFormGroup<T> = {
	[K in keyof T]: FormControl<T[K] | null>;
};
