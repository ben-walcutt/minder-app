import { Action } from '@ngrx/store';
import { Note } from '@models/note.model';

export const NOTES_GET = '[Notes] Get Notes';
export const NOTES_LOAD = '[Notes] Load Notes';
export const NOTES_ADD = '[Notes] Add Note';
export const NOTES_DEL = '[Notes] Delete Note';
export const NOTES_UPDATE = '[Notes] Update Note';
export const NOTES_GET_RELATED = '[Notes] Get Related Notes';
export const NOTES_LOAD_RELATED = '[Notes] Load Related Notes';
export const NOTES_ADD_RELATED_TASK = '[Notes] Add Related Note to Task';

export class NotesGetAction implements Action {
    readonly type = NOTES_GET;
    constructor(public payload?: any) {}
}
export class NotesLoadAction implements Action {
    readonly type = NOTES_LOAD;
    constructor(public payload: Note[]) {}
}
export class NotesAddAction implements Action {
    readonly type = NOTES_ADD;
    constructor(public payload: Note) {}
}

export class NotesDeleteAction implements Action {
    readonly type = NOTES_DEL;
    constructor(public payload: number) {}
}

export class NotesUpdateAction implements Action {
    readonly type = NOTES_UPDATE;
    constructor(public payload: Note) {}
}

export class NotesGetRelatedAction implements Action {
    readonly type = NOTES_GET_RELATED;
    constructor(public payload: number) {}
}

export class NotesLoadRelatedAction implements Action {
    readonly type = NOTES_LOAD_RELATED;
    constructor(public payload: Note[]) {}
}

export class NotesAddRelatedToTaskAction implements Action {
    readonly type = NOTES_ADD_RELATED_TASK;
    constructor(public taskId: number, public note: Note) {}
}

export type Actions
    = NotesGetAction |
    NotesLoadAction |
    NotesAddAction |
    NotesDeleteAction |
    NotesUpdateAction |
    NotesGetRelatedAction |
    NotesLoadRelatedAction |
    NotesAddRelatedToTaskAction;