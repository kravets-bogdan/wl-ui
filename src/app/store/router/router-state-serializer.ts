import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { IBreadcrumb } from '@wl/core';
import { UpdateBreadcrumbsAction } from '@wl/store/core';

export interface RouterStateParams {
	url: string;
	params: Params;
	queryParams: Params;
}

// Map the router snapshot to { url, params, queryParams }
export class AppRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
	constructor(private readonly store: Store) {}
	serialize(routerState: RouterStateSnapshot): RouterStateParams {
		const {
			url,
			root: { queryParams },
		} = routerState;

		const breadcrumbs: IBreadcrumb[] = [];

		let { root: route } = routerState;
		while (route.firstChild) {
			if ((route as any).routeConfig?.data?.breadcrumb) {
				const breadcrumb: IBreadcrumb = {
					...(route as any).routeConfig?.data?.breadcrumb,
					path: route?.routeConfig?.path,
					link: [...breadcrumbs.map(b => b.path), route?.routeConfig?.path].join('/'),
				};
				breadcrumbs.push(breadcrumb);
			}
			route = route.firstChild;
		}
		this.store.dispatch(new UpdateBreadcrumbsAction(breadcrumbs));

		const { params } = route;
		return { url, params, queryParams };
	}
}
