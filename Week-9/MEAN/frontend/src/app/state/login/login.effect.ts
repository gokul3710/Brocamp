import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginRequest, loginSuccess, loginFailure } from './login.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  login$ = createEffect(() =>

    this.actions$.pipe(
      ofType(loginRequest),
      switchMap(({ credentials }) =>
        this.userService.login(credentials).pipe(
          map(res => {
            let response: any = res
            if (response) {
              sessionStorage.setItem('token', response[1])
              console.log(response[0]);
              this.userService.user = response[0]
              return loginSuccess({ user: response[0], token: response[1] });
            }
            else
              return loginFailure({ error: response })
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        // window.location.href = '/'
        this.router.navigate(['/']);
      })
    ), { dispatch: false }
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFailure),
      tap(() => {
        this.router.navigate(['/login']);
      })
    ), { dispatch: false }
  );

}
