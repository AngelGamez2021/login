import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers/';

export interface AppState {
    users: reducers.State
}

export const AppReducers: ActionReducerMap<AppState> = {
    users: reducers.userReducer
}