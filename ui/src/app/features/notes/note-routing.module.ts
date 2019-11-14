import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';


const routes: Routes = [
    {
        path: '',
        component: NotesComponent
    },
    {
        path: 'create',
        component: NoteCreateComponent
    },
    {
        path: ':id',
        component: NoteDetailComponent
    }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
