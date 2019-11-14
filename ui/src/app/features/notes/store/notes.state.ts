import { Note } from '@models/note.model';

export interface NoteState {
    notes: Note[],
    relatedNotes: Note[]
}

export const initialNoteState: NoteState = {
    notes: [],
    relatedNotes: []
};