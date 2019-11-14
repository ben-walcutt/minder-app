import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromNotes from '../store/index';
import { Note } from 'src/app/shared/models/note.model';
import { Observable } from 'rxjs';
import { NotesUpdateAction, NotesDeleteAction } from '../store/index';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  private notes: Observable<Note[]>;
  private note: Note;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteStore: Store<fromNotes.NoteState>,
    private messageService: MessageService,
    private router: Router
  ) {
    this.notes = this.noteStore.pipe(select(fromNotes.getAllNotes));
   }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.notes.subscribe(data => {
      if (data) {
        this.note = data.find(x => x.id === id);
      }
    })
  }

  update() {
    this.note.lastupdatetime = new Date();
    this.messageService.add({severity: 'success', summary: 'Note Update', detail: 'Note updated!'})
    this.noteStore.dispatch(new NotesUpdateAction(this.note));
    this.router.navigate(['notes']);
  }

  delete() {
    this.messageService.add({severity: 'warn', summary: 'Delete Note', detail: 'Note deleted successfully.'});
    this.noteStore.dispatch(new NotesDeleteAction(this.note.id));
    this.router.navigate(['notes'])
  }

}
