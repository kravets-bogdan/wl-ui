import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
	constructor() {}

	handleError(error: any) {
		// TODO: Implement handling errors.
		console.error('[ErrorHandler]:', error);
	}
}
