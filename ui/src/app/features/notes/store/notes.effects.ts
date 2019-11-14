import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as noteActions from './notes.actions';
import * as applicationActions from '../../../store/application/index';
import * as taskActions from '@tasks/store/tasks.actions';
import { switchMap, map } from 'rxjs/operators';
import { NotesService } from '../notes.service';
import { Action } from '@ngrx/store';

@Injectable()
export class NotesEffects {
    @Effect()
    getNotes$: Observable<Action> =
        this.action$.pipe(
            ofType(noteActions.NOTES_GET, applicationActions.USER_LOGIN_SUCCESS),
            switchMap((action) => this.noteService.getAllNotes().pipe(
                map(data => new noteActions.NotesLoadAction(data))
            ))
        )

    @Effect()
    getRelatedNotes$: Observable<Action> =
        this.action$.pipe(
            ofType(noteActions.NOTES_GET_RELATED),
            map((action) => (action as any).payload),
            switchMap((id: number)=> this.noteService.getRelatedNotesByTask(id).pipe(
                map(data => new noteActions.NotesLoadRelatedAction(data))
            ))
        )

    @Effect()
    addRelatedNoteToTask$: Observable<Action> = 
        this.action$.pipe(
            ofType(noteActions.NOTES_ADD_RELATED_TASK),
            map((action) => (action as any)),
            switchMap((action) => this.noteService.addNote(action.note).pipe(
                    map(data => new taskActions.TasksAddRelatedNoteAction(action.taskId, data.id))
                ))
        )

    constructor(
        private action$: Actions,
        private noteService: NotesService
    ) {}
}