import { Direction } from '@angular/cdk/bidi';
import { Selector } from '@ngxs/store';
import { CoreState } from './core-state';
import { CoreStateModel } from './core-state.model';
import { ELanguages, IBreadcrumb } from '@wl/core';

export class CoreSelectors {
	@Selector([CoreState])
	public static pending(state: CoreStateModel): boolean {
		return state.pending;
	}

	@Selector([CoreState])
	public static language(state: CoreStateModel): ELanguages {
		return state.language;
	}

	@Selector([CoreState])
	public static isMobileView(state: CoreStateModel): boolean {
		return state.isMobileView;
	}

	@Selector([CoreState])
	public static isTabletView(state: CoreStateModel): boolean {
		return state.isTabletView;
	}

	@Selector([CoreState])
	public static breadcrumbs(state: CoreStateModel): IBreadcrumb[] {
		return state.breadcrumbs;
	}
}
