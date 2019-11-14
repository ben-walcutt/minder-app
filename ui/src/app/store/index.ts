import * as fromApplication from './application/index';
import * as fromNotes from '@notes/store/index';
import * as fromTasks from '@tasks/store/index';
import * as fromEvents from '@events/store/index';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    applicationState: fromApplication.ApplicationState;
    noteState: fromNotes.NoteState;
    taskState: fromTasks.TaskState;
    eventState: fromEvents.EventState;
}

export const reducers: ActionReducerMap<State> = {
    applicationState: fromApplication.applicationReducer,
    noteState: fromNotes.noteReducer,
    taskState: fromTasks.taskReducer,
    eventState: fromEvents.eventReducer
}