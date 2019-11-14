import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotesModule } from '../notes/notes.module';
import { TasksModule } from '../tasks/tasks.module';
import { EventsModule } from '../events/events.module';
import { TagsModule } from '@tags/tags.module';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

@NgModule({
  declarations: [DashboardComponent, DashboardSummaryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NotesModule,
    TasksModule,
    EventsModule,
    TagsModule
  ]
})
export class DashboardModule { }
