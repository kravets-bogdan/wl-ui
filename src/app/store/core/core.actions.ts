import { BreakpointState } from '@angular/cdk/layout';
import { ELanguages, IBreadcrumb } from '@wl/core';

export class ChangeLangAction {
	public static readonly type = '[Core-State] changed lang.';
	constructor(public language: ELanguages) {}
}

export class UpdateDirectionAction {
	public static readonly type = '[Core-State] update direction.';
}

export class AddBreadcrumbAction {
	public static readonly type = '[Pages-state] add breadcrumbs.';
	constructor(public breadcrumb: IBreadcrumb) {}
}

export class UpdateBreadcrumbsAction {
	public static readonly type = '[Pages-state] update list of breadcrumbs.';
	constructor(public breadcrumbs: IBreadcrumb[]) {}
}

export class IsMobileViewAction {
	public static readonly type = '[Core-State] is mobile view';
	constructor(public payload: boolean) {}
}

export class SetViewStateAction {
	public static readonly type = '[Core-State] setup mobile, tablet modes';
	constructor(public payload: BreakpointState) {}
}

export class SetBrowserTabTitleAction {
	public static readonly type = '[Core-State] set browser tab title.';
	constructor(public payload: string) {}
}
