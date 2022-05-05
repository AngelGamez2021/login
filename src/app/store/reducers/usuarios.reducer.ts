import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";
import * as UserActions from '../actions';




export const userFeatureKey = 'users';

export interface State {
    usuario: User[];
    error: any
};

export const initialState: State = {
    usuario: [],
    error: null,
};


export const _userReducer = createReducer(
    initialState,


    on(UserActions.readUser, state => ({ ...state })),

    on(UserActions.readUserSuccess, (state, { users }) => ({
        ...state,
        // usuario: [...users],
        error: null,

    })),

    on(
        UserActions.readUserFailure,
        (state, action) => ({
            ...state,
            error: action.error,
        })
    )


);


export function userReducer(state: State | undefined, action: Action){
    return _userReducer(state, action)
}