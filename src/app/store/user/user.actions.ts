export class FetchUserInfoAction {
	public static readonly type = '[USER] fetch user info.';
}

export class FetchAuthTokenByCodeAction {
	public static readonly type = '[USER] fetch auth token by code.';
	constructor(public code: string) {}
}
export class FetchAuthTokenByCodeSuccessAction {
	public static readonly type = '[USER] fetch auth token by code success.';
}
export class FetchAuthTokenByCodeErrorAction {
	public static readonly type = '[USER] fetch auth token by code error.';
	constructor(public error: any) {}
}

export class FetchAuthTokenByRefreshTokenAction {
	public static readonly type = '[USER] fetch auth token by refresh token.';
}

export class FetchAuthTokenByRefreshTokenSuccessAction {
	public static readonly type = '[USER] fetch auth token by refresh token success.';
}
export class FetchAuthTokenByRefreshTokenErrorAction {
	public static readonly type = '[USER] fetch auth token by refresh token error.';
	constructor(public error: any) {}
}

export class FetchAuthTokenSuccessAction {
	public static readonly type = '[USER] fetch auth token success.';
	constructor(public token: string) {}
}

export class FetchUserInfoSuccessAction {
	public static readonly type = '[USER] fetch user info success.';
	constructor(public userInfo: any) {}
}

export class FetchUserInfoErrorAction {
	public static readonly type = '[USER] fetch user info error.';
}

export class UpdateUserInfoAction {
	public static readonly type = '[USER] update user info.';

	constructor(public userInfo: any) {}
}
