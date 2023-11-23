import { Selector } from '@ngxs/store';
import { UserState } from './user-state';

import { UserStateModel } from './user-state.model';

export class UserSelectors {
	@Selector([UserState /*, CoreState*/])
	public static pending(pageState: UserStateModel /*, coreState: CoreStateModel*/): boolean {
		return /*!coreState.pending ?*/ pageState.pending /*: false*/;
	}

	@Selector([UserState])
	public static userInfo(state: UserStateModel): any {
		return state.userInfo;
	}

	@Selector([UserState])
	public static token(state: UserStateModel): string {
		return state.access_token;
	}

	@Selector([UserState])
	public static refreshToken(state: UserStateModel): string {
		return state.refresh_token;
	}
}
