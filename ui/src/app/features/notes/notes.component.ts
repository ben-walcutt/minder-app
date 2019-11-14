import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromNotes from './store/index';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from 'src/app/shared/models/note.model';
import { NotesGetAction } from './store/index';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private notes$: Observable<Note[]>;
  private selectedNote: Note;

  constructor(
    private noteStore: Store<fromNotes.NoteState>,
    private router: Router
  ) {
    this.notes$ = this.noteStore.pipe(select(fromNotes.getAllNotes));
   }

  ngOnInit() {
    this.noteStore.dispatch(new NotesGetAction());
  }

  generateBadges(tags: string[]): string {
    return tags.join(' ');
  }

  onRowSelect(event: any) {
    this.router.navigate(['notes/', event.data.id])
  }

}
