import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';
import * as fromNotes from '../store/index';
import { Store, select } from '@ngrx/store';
import { NotesAddAction } from '../store/index';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  private note: Note = {
    id: 0,
    author: '',
    title: '',
    text: '',
    tags: [],
    createtime: new Date(),
    lastupdatetime: new Date()
  }

  constructor(
    private noteStore: Store<fromNotes.NoteState>,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createNote() {
    this.noteStore.dispatch(new NotesAddAction(this.note));
    this.messageService.add({severity: 'success', summary: 'Create Note', detail: 'Note created successfully'});
    this.router.navigate(['/notes']);
  }

}
