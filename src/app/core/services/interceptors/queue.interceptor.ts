import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { catchError, Observable, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { EApi } from '@wl/core';

@Injectable({ providedIn: 'root' })
export class QueueInterceptor implements HttpInterceptor {
	readonly pathsForQueue: EApi[] = [];
	private requestQueue: ReplaySubject<unknown>[] = [];

	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let req = next.handle(request);
		if (!request.url.includes('assets') && this.isUseRequestInQueue(request.url)) {
			const requestQueueItem$ = new ReplaySubject<unknown>(1);
			const result$ = requestQueueItem$.pipe(
				switchMap(() =>
					next.handle(request).pipe(
						tap(response => {
							if (response.type == HttpEventType.Response) {
								this.processNextRequest();
							}
						}),
						catchError((err: any) => {
							this.processNextRequest();
							throw err;
						}),
					),
				),
			);
			this.requestQueue.push(requestQueueItem$);
			if (this.requestQueue.length <= 1) {
				this.dispatchRequest();
			}
			req = result$;
		}

		return req;
	}

	private isUseRequestInQueue(path: string): boolean {
		return this.pathsForQueue.some(p => path.includes(p));
	}

	private processNextRequest(): void {
		if (this.requestQueue.length > 0) {
			this.requestQueue.shift();
		}
		this.dispatchRequest();
	}

	private dispatchRequest(): void {
		if (this.requestQueue.length > 0) {
			const nextSub$ = this.requestQueue[0];
			nextSub$.next(null);
			nextSub$.complete();
		}
	}
}
