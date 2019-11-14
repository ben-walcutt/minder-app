import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as applicationActions from './application-actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApplicationEffects {
    @Effect({dispatch: false})
    navigateOnLoginSuccess =
        this.action$.pipe(
            ofType(applicationActions.USER_LOGIN_SUCCESS),
            tap(() => this.router.navigate(['/dashboard']))
    );

    @Effect({dispatch: false})
    navigateOnLogout = 
        this.action$.pipe(
            ofType(applicationActions.USER_LOGOUT),
            tap(() => this.router.navigate(['/login']))
        );
    
    
    constructor(
        private action$: Actions,
        private store: Store<applicationActions.Actions>,
        private router: Router
    ) {}
}