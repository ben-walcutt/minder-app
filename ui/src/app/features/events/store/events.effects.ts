import * as applicationActions from '../../../store/application/index';
import * as eventActions from './events.actions';
import * as taskActions from '@tasks/store/tasks.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { EventsService } from '../events.service';

@Injectable()
export class EventsEffects {
    @Effect()
    getEvents$: Observable<Action> =
    this.action$.pipe(
        ofType(eventActions.EVENTS_GET, applicationActions.USER_LOGIN_SUCCESS),
        switchMap((action) => this.eventsService.getAllEvents().pipe(
            map(data => new  eventActions.EventsLoadAction(data))
        ))
    )

    @Effect()
    addRelatedEventToTask$: Observable<Action> = 
    this.action$.pipe(
        ofType(eventActions.EVENTS_ADD_RELATED_TASK),
        map((action) => (action as any)),
        switchMap((action) => this.eventsService.addEvent(action.event).pipe(
            map(data => new taskActions.TasksAddRelatedEventAction(action.taskId, data.id))
        ))
    )

    constructor(
        private action$: Actions,
        private eventsService: EventsService
    ) {}
}