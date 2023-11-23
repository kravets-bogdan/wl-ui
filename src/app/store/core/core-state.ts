import { Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { CoreStateModel, defaults } from './core-state.model';
import {
	AddBreadcrumbAction,
	ChangeLangAction,
	IsMobileViewAction,
	SetBrowserTabTitleAction,
	SetViewStateAction,
	UpdateBreadcrumbsAction,
	UpdateDirectionAction,
} from './core.actions';
// import { TranslateService } from '@ngx-translate/core';
import { ELanguages } from '@wl/core';
import { first } from 'rxjs';
import { Direction, Directionality } from '@angular/cdk/bidi';

@State<CoreStateModel>({
	name: 'coreState',
	defaults,
})
@Injectable()
export class CoreState implements NgxsOnInit {
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private readonly ngZone: NgZone,
	) // private readonly translateService: TranslateService,
	{}

	ngxsOnInit({ dispatch, getState }: StateContext<CoreStateModel>): void {
		const { language } = getState();
		dispatch(new ChangeLangAction(language || ELanguages.EN));
	}

	@Action(IsMobileViewAction)
	IsMobileView({ patchState }: StateContext<CoreStateModel>, { payload }: IsMobileViewAction): void {
		patchState({ isMobileView: payload });
	}

	@Action(ChangeLangAction)
	changeLang({ patchState, dispatch }: StateContext<CoreStateModel>, { language }: ChangeLangAction): void {
		this.document.documentElement.lang = language;
		patchState({ language });
	}

	@Action(SetViewStateAction)
	setViewStateAction({ patchState }: StateContext<CoreStateModel>, { payload }: SetViewStateAction): void {
		const { breakpoints } = payload;
		const isTabletView = breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium];
		const isMobileView = breakpoints[Breakpoints.XSmall];
		patchState({ isTabletView, isMobileView });
	}

	@Action(AddBreadcrumbAction, { cancelUncompleted: true })
	addBreadcrumb({ patchState, getState }: StateContext<CoreStateModel>, { breadcrumb }: AddBreadcrumbAction): void {
		const { breadcrumbs } = getState();
		patchState({ breadcrumbs: [...breadcrumbs, breadcrumb] });
	}

	@Action(UpdateBreadcrumbsAction, { cancelUncompleted: true })
	updateBreadcrumbs({ patchState }: StateContext<CoreStateModel>, { breadcrumbs }: UpdateBreadcrumbsAction): void {
		patchState({ breadcrumbs });
	}
}
