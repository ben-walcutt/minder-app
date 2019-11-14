import { Action } from '@ngrx/store';
import { Event } from '@models/event.model';

export const EVENTS_GET = '[Events] Get Events';
export const EVENTS_LOAD = '[Events] Load  Events';
export const EVENTS_ADD = '[Events] Add Event';
export const EVENTS_UPDATE = '[Events] Update Event';
export const EVENTS_DELETE = '[Events] Delete Event';
export const EVENTS_ADD_RELATED_TASK = '[Events] Add Related Event to Task';

export class EventsGetAction implements Action {
    readonly type = EVENTS_GET;
    constructor() {}
}

export class EventsLoadAction implements Action {
    readonly type = EVENTS_LOAD;
    constructor(public payload: Event[]) {}
}

export class EventsAddAction implements Action {
    readonly type = EVENTS_ADD;
    constructor(public payload: Event) {}
}

export class EventsUpdateAction implements Action {
    readonly type = EVENTS_UPDATE;
    constructor(public payload: Event) {}
}

export class EventsDeleteAction implements Action {
    readonly type = EVENTS_DELETE;
    constructor(public payload: number) {}
}

export class EventsAddRelatedToTaskAction implements Action {
    readonly type = EVENTS_ADD_RELATED_TASK;
    constructor(public taskId: number, public event: Event) {}
}

export type Actions
    = EventsGetAction |
    EventsLoadAction |
    EventsAddAction |
    EventsUpdateAction |
    EventsDeleteAction |
    EventsAddRelatedToTaskAction;