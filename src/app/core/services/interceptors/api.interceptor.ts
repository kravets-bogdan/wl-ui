import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let { url } = request;
		const isAssets = url.includes('assets/');
		const isExternalApi = url.startsWith('http');
		url = isAssets || isExternalApi ? url : `${environment.API_URL}/${request.url}`;
		const apiReq = request.clone({ url });
		return next.handle(apiReq);
	}
}
