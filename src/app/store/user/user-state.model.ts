export interface Authorization {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	refresh_token_expires_in: number;
}

export class UserStateModel implements Authorization {
	constructor(
		public pending: boolean = false,
		public userInfo: any = {
			firstName: '',
			middleName: '',
			lastName: '',
			email: '',
		},
		public access_token: string = localStorage.getItem('wl-token') || '',
		public expires_in: number = 0,
		public refresh_token: string = '',
		public refresh_token_expires_in: number = 0,
	) {}
}

export const defaults: UserStateModel = new UserStateModel();
