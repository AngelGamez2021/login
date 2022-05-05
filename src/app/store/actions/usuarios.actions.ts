import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";



export const readUser = createAction ('[User component] Read Users');

export const readUserSuccess = createAction(
    '[User component] Read Users Success',
    props<{users: User[]}>()
);

export const readUserFailure = createAction (
    '[User component] Read Users Failure',
    props<{error: any}>()
);