import * as applicationAction from './application-actions';
import { ApplicationState, initialApplicationState } from './application-state';

export function applicationReducer(state: ApplicationState = initialApplicationState, action: applicationAction.Actions): ApplicationState {
    switch (action.type) {
        case applicationAction.USER_LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        case applicationAction.USER_LOGOUT: {
            return {
                ...state,
                user: ''
            }
        }
        default: return state;
    }
}