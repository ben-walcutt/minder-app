import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NoteState } from './notes.state';
import { Note } from '@models/note.model';

export const notesData = createFeatureSelector<NoteState>('noteState');

export const getRecentNotes = createSelector(notesData, (state: NoteState) => {
    return state.notes.slice(0, 5);
});

export const getAllNotes = createSelector(notesData, (state: NoteState) => {
    return state.notes;
});

export const getRelated = createSelector(getAllNotes, (notes: Note[], props: any) => {
    return notes.filter(n => props.ids[0].includes(n.id));
})