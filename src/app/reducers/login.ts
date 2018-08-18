import { Action } from '@ngrx/store';

export const LOGINGED = 'LOGINGED';
export const LOGOUT = 'LOGOUT';


export function loginReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case LOGINGED:
            return state = true;
        case LOGOUT:
            return state = false;
        default:
            return state;
    }
}