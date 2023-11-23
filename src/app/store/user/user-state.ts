import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, finalize, map, Observable, takeWhile, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';

import { AuthSkipInterceptor, EApi } from '@wl/core';
import {
	FetchAuthTokenByRefreshTokenAction,
	FetchAuthTokenByRefreshTokenErrorAction,
	FetchAuthTokenByRefreshTokenSuccessAction,
	FetchAuthTokenSuccessAction,
	FetchUserInfoAction,
	FetchUserInfoErrorAction,
	FetchUserInfoSuccessAction,
	UpdateUserInfoAction,
} from './user.actions';
import { Authorization, defaults, UserStateModel } from './user-state.model';

@State<UserStateModel>({
	name: 'userState',
	defaults,
})
@Injectable()
export class UserState {
	constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

	@Action(FetchAuthTokenByRefreshTokenAction)
	fetchAuthTokenByRefreshToken({
		dispatch,
		patchState,
		getState,
	}: StateContext<UserStateModel>): Observable<Authorization> {
		const { refresh_token } = getState();
		const formData: FormData = new FormData();
		formData.append('refresh_token', refresh_token);
		return this.httpClient
			.post<Authorization>('EApi.AUTHORIZATION_REFRESH_TOKEN', formData, {
				headers: { [AuthSkipInterceptor]: AuthSkipInterceptor },
			})
			.pipe(
				tap((resp: Authorization) => {
					patchState(resp);
					dispatch(new FetchAuthTokenByRefreshTokenSuccessAction());
				}),
				catchError(error => {
					dispatch(new FetchAuthTokenByRefreshTokenErrorAction(error));
					return throwError(() => error);
				}),
			);
	}

	// @Action(FetchUserInfoAction)
	// fetchUserInfo({ dispatch }: StateContext<UserStateModel>): Observable<IUser> {
	// 	return this.httpClient.get<IUser>(EApi.TODO_CHANGE_IT).pipe(
	// 		tap(user => {
	// 			dispatch(new FetchUserInfoSuccessAction(user));
	// 		}),
	// 		catchError(error => {
	// 			dispatch(new FetchUserInfoErrorAction());
	// 			return throwError(() => error);
	// 		}),
	// 	);
	// }

	@Action(FetchAuthTokenSuccessAction)
	fetchAuthTokenSuccess({ patchState }: StateContext<UserStateModel>, { token }: FetchAuthTokenSuccessAction): void {
		localStorage.setItem('wl-token', token);
		patchState({ access_token: token });
	}

	@Action(FetchUserInfoSuccessAction)
	fetchUserInfoSuccess({ dispatch }: StateContext<UserStateModel>, { userInfo }: FetchUserInfoSuccessAction): void {
		dispatch(new UpdateUserInfoAction(userInfo));
	}

	@Action(FetchUserInfoErrorAction)
	fetchUserInfoError(): void {}

	@Action(UpdateUserInfoAction)
	updateUserInfo({ patchState }: StateContext<UserStateModel>, { userInfo }: UpdateUserInfoAction): void {
		patchState({ userInfo });
	}
}
