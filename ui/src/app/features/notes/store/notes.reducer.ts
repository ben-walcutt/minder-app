import * as notesAction from './notes.actions';
import { NoteState, initialNoteState } from './notes.state';

let NOTE_COUNT: number = 2;

export function noteReducer(state: NoteState = initialNoteState, action: notesAction.Actions): NoteState {
    switch(action.type) {
        case notesAction.NOTES_LOAD: {
            return {
                ...state,
                notes: action.payload
            }
        }
        case notesAction.NOTES_ADD: {
            let notes = state.notes;
            action.payload.id = NOTE_COUNT++;
            notes.push(action.payload);
            return {
                ...state,
                notes: notes
            }
        }
        case notesAction.NOTES_UPDATE: {
            let notes = state.notes.filter(n => n.id !== action.payload.id);
            notes.push(action.payload);
            return {
                ...state,
                notes: notes
            }
        }
        case notesAction.NOTES_DEL: {
            let notes = state.notes.filter(n => n.id !== action.payload);
            return {
                ...state,
                notes: notes
            }
        }
        case notesAction.NOTES_LOAD_RELATED: {
            return {
                ...state,
                relatedNotes: action.payload
            }
        }
        case notesAction.NOTES_ADD_RELATED_TASK: {
            let notes = state.notes;
            notes.push(action.note);
            return {
                ...state,
                notes: notes.slice()
            }
        }
        default: return state;
    }
}