import { ESvgIcons } from '../enums/svg-icons.enum';

export interface IBreadcrumb {
	icon?: ESvgIcons;
	displayLabel: string;
	link: string;
	path: string;
}
