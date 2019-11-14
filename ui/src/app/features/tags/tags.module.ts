import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { EventsModule } from '@events/events.module';
import { NotesModule } from '@notes/notes.module';
import { TasksModule } from '@tasks/tasks.module';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    EventsModule,
    NotesModule,
    TasksModule
  ]
})
export class TagsModule { }
