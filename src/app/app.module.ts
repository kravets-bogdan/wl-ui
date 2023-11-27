import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './modules/system/components/sidebar-menu/sidebar-menu.component';
import { HeaderBarComponent } from './modules/system/components/header-bar/header-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from '@wl/app-store.module';
import { IconRegistryModule } from '@wl-shared/icon-registry';
import { CoreModule } from '@wl/core';
import {
	ApiInterceptor,
	AppInitService,
	AuthInterceptor,
	ErrorHandlerService,
	initializeApp,
	QueueInterceptor,
} from '@wl/core/services';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { SspPageService } from '@wl/modules/system/modules/ssp-page/ssp-page.service';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material/autocomplete';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { MAT_TOOLTIP_SCROLL_STRATEGY } from '@angular/material/tooltip';
import { Overlay, CloseScrollStrategy } from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => CloseScrollStrategy {
	return () => overlay.scrollStrategies.close();
}

@NgModule({
	declarations: [AppComponent, SidebarMenuComponent, HeaderBarComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		AppStoreModule,
		IconRegistryModule,
		CoreModule.forRoot(),
		MatIconModule,
		MatRadioModule,
	],

	providers: [
		MatIconRegistry,
		AppInitService,
		SspPageService,

		{ provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] },
		{ provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] },
		{ provide: MAT_TOOLTIP_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] },
		{
			provide: APP_INITIALIZER,
			useFactory: initializeApp,
			deps: [AppInitService],
			multi: true,
		},
		{
			provide: Window,
			useValue: window,
		},
		{
			provide: MAT_TABS_CONFIG,
			useValue: { animationDuration: '0ms' },
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: QueueInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},
		{
			provide: ErrorHandler,
			useClass: ErrorHandlerService,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
