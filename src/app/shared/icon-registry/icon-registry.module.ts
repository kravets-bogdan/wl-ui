import { NgModule } from '@angular/core';
import { SvgIconsService } from './svg-icons.service';

@NgModule({
	providers: [SvgIconsService],
})
export class IconRegistryModule {
	constructor(private readonly iconService: SvgIconsService) {
		this.iconService.registerIcons();
	}
}
