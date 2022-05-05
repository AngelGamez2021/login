import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import * as UserActions from '../actions'
import { UserService } from '../../services/user.service'




@Injectable()

export class UserEffects {


  readUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.readUser),
      concatMap(() =>
        this.userService.getUsers().pipe(
          map(({ dataUsers }) => UserActions.readUserSuccess({ users: dataUsers })),
          catchError((error) => of(UserActions.readUserFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }


}