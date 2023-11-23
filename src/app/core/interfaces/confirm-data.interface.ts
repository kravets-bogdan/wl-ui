import { TemplateRef } from '@angular/core';

export interface IConfirmData {
	title: string;
	description?: string;
	descriptionTemplate?: TemplateRef<any>;
	alertMode?: boolean;
}
