import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '@models/note.model';
import { Observable, of } from 'rxjs';
import { NOTES } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // an api would be nice here
  getAllNotes(): Observable<Note[]> {
    return of(NOTES);
  };

  getRelatedNotesByTask(id: number): Observable<Note[]> {
    return of(NOTES.slice(0, 1));
  }

  getRelatedNotesByEvent(id: number): Observable<Note[]> {
    return of(NOTES.slice(1,1));
  }

  addNote(note: Note): Observable<Note> {
    note.id = NOTES.length;
    return of(note);
  }
}
