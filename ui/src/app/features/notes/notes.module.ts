import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NoteSummaryComponent } from './note-summary/note-summary.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NotesRoutingModule } from './note-routing.module';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NotesComponent, NoteSummaryComponent, NoteCreateComponent, NoteDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    EditorModule,
    ChipsModule,
    TableModule,
    ToastModule,
    SharedModule
  ],
  exports: [
    NoteSummaryComponent,
    NoteCreateComponent
  ]
})
export class NotesModule { }
