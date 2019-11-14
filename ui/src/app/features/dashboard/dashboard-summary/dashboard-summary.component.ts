import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromNotes from '../../notes/store/index';
import * as fromTasks from '../../tasks/store/index';
import * as fromEvents from '../../events/store/index';
import { Note } from '@models/note.model';
import { Task } from '@models/task.model';
import { Event } from '@models/event.model';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {

  private recentNotes$: Observable<Note[]>;
  private incompleteTasks$: Observable<Task[]>;
  private upcomingEvents$: Observable<Event[]>;

  constructor(
    private noteStore: Store<fromNotes.NoteState>,
    private taskStore: Store<fromTasks.TaskState>,
    private eventStore: Store<fromEvents.EventState>,
  ) {
    this.recentNotes$ = this.noteStore.pipe(select(fromNotes.getRecentNotes));
    this.incompleteTasks$ = this.taskStore.pipe(select(fromTasks.getIncompleteTasks));
    this.upcomingEvents$ = this.eventStore.pipe(select(fromEvents.getUpcomingEvents));
   }

  ngOnInit() {
  }
}
