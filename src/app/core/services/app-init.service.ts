import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {
	init(): Promise<void> {
		return new Promise<void>(resolve => {
			resolve();
		});
	}
}

export function initializeApp(appInitService: AppInitService): any {
	return (): Promise<void> => {
		return appInitService.init();
	};
}
