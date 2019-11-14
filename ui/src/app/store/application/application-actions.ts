import { Action } from '@ngrx/store';

export const USER_LOGIN = '[Application] User Login';
export const USER_LOGIN_SUCCESS = '[Application] User Login Sucess';
export const USER_LOGOUT = '[Application] User Logout';

export class UserLoginAction implements Action {
    readonly type = USER_LOGIN;

    constructor() {}
}

export class UserLoginSucessAction implements Action {
    readonly type = USER_LOGIN_SUCCESS;

    constructor(public payload: string) {}
}

export class UserLogoutAction implements Action {
    readonly type = USER_LOGOUT;

    constructor() {}
}

export type Actions
    = UserLoginAction |
    UserLoginSucessAction |
    UserLogoutAction;

