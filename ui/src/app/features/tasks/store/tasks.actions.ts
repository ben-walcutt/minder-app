import { Action } from '@ngrx/store';
import { Task } from '@models/task.model';

export const TASKS_GET = '[Tasks] Get Tasks';
export const TASKS_LOAD = '[Tasks] Load Tasks';
export const TASKS_ADD = '[Tasks] Add Task';
export const TASKS_DEL = '[Tasks] Delete Task';
export const TASKS_UPDATE = '[Tasks] Update Task';
export const TASKS_COMPLETE = '[Tasks] Complete Task';
export const TASKS_ADD_RELATED_NOTE = '[Tasks] Add Related Note';
export const TASKS_ADD_RELATED_EVENT = '[Tasks] Add Related Event';

export class TasksGetAction implements Action {
    readonly type = TASKS_GET;

    constructor() {}
}

export class TasksLoadAction implements Action {
    readonly type = TASKS_LOAD;

    constructor(public payload: Task[]) {}
}

export class TasksAddAction implements Action {
    readonly type = TASKS_ADD;

    constructor(public payload: Task) {}
}

export class TasksDeleteAction implements Action {
    readonly type = TASKS_DEL;

    constructor(public payload: number) {}
}

export class TasksUpdateAction implements Action {
    readonly type = TASKS_UPDATE;

    constructor(public payload: Task) {}
}

export class TasksCompleteAction implements Action {
    readonly type = TASKS_COMPLETE;

    constructor(public payload: number) {}
}

export class TasksAddRelatedNoteAction implements Action {
    readonly type = TASKS_ADD_RELATED_NOTE;
    constructor(public taskId: number, public noteId: number) {}
}

export class TasksAddRelatedEventAction implements Action {
    readonly type = TASKS_ADD_RELATED_EVENT;
    constructor(public taskId: number, public eventId: number) {}
}

export type Actions
    = TasksGetAction |
    TasksLoadAction |
    TasksAddAction |
    TasksDeleteAction |
    TasksUpdateAction |
    TasksCompleteAction |
    TasksAddRelatedNoteAction |
    TasksAddRelatedEventAction;