import {
	HttpClient,
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest,
	HttpResponseBase,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Store } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
	constructor(private readonly http: HttpClient, private readonly store: Store, private readonly actions$: Actions) {}

	intercept(request: HttpRequest<HttpResponseBase>, next: HttpHandler): Observable<HttpEvent<any>> {
		const authReq: HttpRequest<unknown> = this.getAuthorizedRequest(request);
		return next
			.handle(authReq)
			.pipe
			// catchError(response => {
			// 	let result: Observable<never | HttpEvent<any>> | null = throwError(() => response);
			// 	const needToAuthenticate: boolean = response.status === 401;
			// 	if (needToAuthenticate) {
			// 		console.log('Unauthorized!');
			// 			result = this.actions$.pipe(
			// 				ofActionSuccessful(
			// 					FetchAuthTokenByRefreshTokenSuccessAction,
			// 					FetchAuthTokenByRefreshTokenErrorAction,
			// 				),
			// 				first(),
			// 				switchMap(action => {
			// 					let nextReq = next.handle(this.getAuthorizedRequest(request));
			// 					if (action instanceof FetchAuthTokenByRefreshTokenErrorAction) {
			// 						nextReq = response.error;
			// 					}
			// 					return nextReq;
			// 				}),
			// 			);
			//
			// 	}
			// 	return result;
			// }),
			();
	}

	private getAuthorizedRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
		// const token = this.store.selectSnapshot(UserSelectors.token);
		// if (token) {
		// 	request = request.clone({
		// 		setHeaders: {
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	});
		// }
		// if (request.headers.has(AuthSkipInterceptor)) {
		// 	const headers = request.headers.delete(AuthSkipInterceptor).delete('Authorization');
		// 	request = request.clone({ headers });
		// }
		return request;
	}
}
