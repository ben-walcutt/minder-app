import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './task-routing.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { NotesModule } from '@notes/notes.module';
import { EventsModule } from '@events/events.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskCreateComponent, TaskDetailComponent, TaskSummaryComponent],
  imports: [
  CommonModule,
    TasksRoutingModule,
    FormsModule,
    EditorModule,
    ChipsModule,
    TableModule,
    CalendarModule,
    ToastModule,
    SidebarModule,
    NotesModule,
    EventsModule,
    SharedModule
  ],
  exports: [
    TaskSummaryComponent
  ]
})
export class TasksModule { }
