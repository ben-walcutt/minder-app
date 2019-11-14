import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import * as applicationActions from '../../../store/application/index';
import { TasksService } from '../tasks.service';

@Injectable()
export class TasksEffects {
    @Effect()
    getNotes$: Observable<Action> =
        this.action$.pipe(
            ofType(tasksActions.TASKS_GET, applicationActions.USER_LOGIN_SUCCESS),
            switchMap((action) => this.taskService.getAllTasks().pipe(
                map(data => new tasksActions.TasksLoadAction(data))
            ))
        )


    constructor(
        private action$: Actions,
        private taskService: TasksService
    ) {}
}