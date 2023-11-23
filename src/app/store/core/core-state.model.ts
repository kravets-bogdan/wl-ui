import { ELanguages, IBreadcrumb } from '@wl/core';

export class CoreStateModel {
	constructor(
		public pending: boolean = false,
		public isMobileView: boolean = false,
		public isTabletView: boolean = false,
		public language: ELanguages = ELanguages.EN,
		public breadcrumbs: IBreadcrumb[] = [],
	) {}
}

export const defaults: CoreStateModel = new CoreStateModel();
