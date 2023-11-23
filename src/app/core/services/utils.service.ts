import { ElementRef, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import * as moment from 'moment-timezone';
import { ActivatedRouteSnapshot, Params } from '@angular/router';

@Injectable({
	providedIn: 'any',
})
export class UtilsService {
	constructor(private readonly dialog: MatDialog) {}

	openDialog<T, D = any, R = any>(component: ComponentType<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
		const defaultConfig: MatDialogConfig<D> = {
			panelClass: 'up-dialog',
			maxWidth: 'var(--app-page-container-width)',
			width: '90vw',
			backdropClass: 'up-dialog-backdrop',
			maxHeight: '90vh',
		};
		const dialogConfig = {
			...defaultConfig,
			...(config ? config : {}),
		};

		return this.dialog.open(component, dialogConfig);
	}

	public static getAllRouteParams(activatedRouteSnapshot: ActivatedRouteSnapshot): Params {
		let result = { ...(activatedRouteSnapshot.params || {}) };
		if (activatedRouteSnapshot.parent) {
			result = {
				...result,
				...UtilsService.getAllRouteParams(activatedRouteSnapshot.parent),
			};
		}
		return result;
	}

	public static getQueryParamsString(params: string[]): string {
		if (!params.length) return '';
		return `?${params.join('&')}`;
	}

	public static TRACK_BY_STRING(index: number, item: string): string | number {
		return item || index;
	}

	/**
	 * Get property from object by path divided "."
	 * for example:
	 * obj = {
	 *     name: {
	 *         first: 'Joe',
	 *         last: 'Doe',
	 *     }
	 * }
	 * for get firs name from this object you need create path: 'name.first'
	 * deepFind(obj, 'name.first');
	 * @param obj: any
	 * @param path: string
	 */
	static deepFind<T = any>(obj: any, path: string): T | undefined {
		const paths: string[] = path.split('.');
		let current = obj;

		for (let i = 0; i < paths.length; ++i) {
			if (current[paths[i]] == undefined) {
				return undefined;
			} else {
				current = current[paths[i]];
			}
		}
		return current;
	}

	/**
	 * Truncate string by length
	 * @param str: string
	 * @param length: number
	 */
	truncateString(str: string = '', length: number): string {
		let result = str;
		if (result.length > length) {
			result = `${result.slice(0, length)}...`;
		}
		return result;
	}

	/**
	 * The HTMLElement.focus() method sets focus on the specified element, if it can be focused.
	 * The focused element is the element which will receive keyboard and similar events by default.
	 * @param {ElementRef} element
	 */
	static focusElement(element: ElementRef): void {
		if (element && element.nativeElement) {
			element.nativeElement.focus();
		}
	}

	static get moment(): any {
		return moment;
	}

	static idTreeGenerator(
		list: any[],
		parentIndex: number = 1,
		identifyKey: string = 'id',
		childrenKey: string = 'children',
	): any {
		return list.map((item, index) => {
			if (item[childrenKey]?.length) {
				item[childrenKey] = UtilsService.idTreeGenerator(item[childrenKey], index + 1);
			}
			return {
				...item,
				[identifyKey]: parentIndex === 1 ? `${index + 1}` : `${parentIndex}_${index + 1}`,
			};
		});
	}
}
