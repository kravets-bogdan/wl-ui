import { NgModule } from '@angular/core';

import { NgxsModule, Store } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';

import { UserState } from '@wl/store/user';
import { CoreState } from '@wl/store/core';
import { AppRouterStateSerializer } from '@wl/store/router/router-state-serializer';

@NgModule({
	imports: [
		NgxsModule.forRoot([CoreState, UserState]),
		// [BUG]: Route not updated via ReduxDevTools https://github.com/ngxs/store/issues/1640
		// [BUG]: NgxsReduxDevtoolsPluginModule logs actions in wrong order when dispatching actions from async actions
		// https://github.com/ngxs/store/issues/139
		// [BUG]: No displays map values into state https://github.com/ngxs/store/issues/314
		NgxsFormPluginModule.forRoot(),
		// NgxsStoragePluginModule.forRoot({
		// 	key: [CoreState, UserState],
		// 	storage: StorageOption.LocalStorage,
		// 	namespace: 'FIBI-portal__',
		// }),
		NgxsRouterPluginModule.forRoot(),
		// NgxsReduxDevtoolsPluginModule.forRoot(),
	],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: AppRouterStateSerializer,
			deps: [Store],
		},
	],
})
export class AppStoreModule {}
