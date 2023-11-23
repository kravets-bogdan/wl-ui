import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { PlatformModule } from '@angular/cdk/platform';
import { TitleStrategy } from '@angular/router';
import { CustomPageTitleStrategy } from '@wl/core/services/custom-page-title-strategy';

import { UtilsService } from '@wl/core/services';

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
// 	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		PlatformModule,
		// TranslateModule.forRoot({
		// 	defaultLanguage: 'he',
		// 	loader: {
		// 		provide: TranslateLoader,
		// 		useFactory: HttpLoaderFactory,
		// 		deps: [HttpClient],
		// 	},
		// }),
	],
	providers: [{ provide: TitleStrategy, useClass: CustomPageTitleStrategy }, UtilsService],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() private readonly parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule has already been loaded. Import the core module in AppModule only.');
		}
	}

	public static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [],
		};
	}
}
