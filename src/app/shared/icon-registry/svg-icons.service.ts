import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ESvgIcons } from '@wl/core';

const ICONS: string = 'assets/icons';

@Injectable({
	providedIn: 'root',
})
export class SvgIconsService {
	constructor(private readonly matIconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

	icons: string[] = Object.values(ESvgIcons);

	/**
	 * Method #registerIcons for registration icons from assets/icons
	 * If you want to add some new icon you should move the icon to directory assets/icons
	 * then add file name to enum ESvgIcons. And use from Enum in your component.
	 * For example:
	 *
	 * Move the file new-icon.svg to - assets/icons/new-icon.svg
	 *
	 * export enum ESvgIcons {
	 *     MY_NEW_ICON = 'new-icon',
	 * }
	 *
	 * @Component({
	 *     template: '
	 *          <mat-icon [svgIcon]="ICONS.MY_NEW_ICON"></mat-icon>
	 *     ',
	 * })
	 * export class SomeComponent {
	 *     readonly ICONS = ESvgIcons;
	 * }
	 */
	registerIcons(): void {
		this.matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
		for (const key of this.icons) {
			this.matIconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(`${ICONS}/${key}.svg`));
		}
	}
}
