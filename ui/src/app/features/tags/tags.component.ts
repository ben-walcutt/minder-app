import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '@models/note.model';
import { Task } from '@models/task.model';
import { Event } from '@models/event.model';
import * as fromNotes from '@notes/store/index';
import * as fromTasks from '@tasks/store/index';
import * as fromEvents from '@events/store/index';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  private tag: string;

  private notes: Note[];
  private filteredNotes: Note[] = [];
  private tasks: Task[];
  private filteredTasks: Task[] = [];
  private events: Event[];
  private filteredEvents: Event[] = [];

  private notes$: Observable<Note[]>;
  private tasks$: Observable<Task[]>;
  private events$: Observable<Event[]>;

  constructor(
    private noteStore: Store<fromNotes.NoteState>,
    private taskStore: Store<fromTasks.TaskState>,
    private eventStore: Store<fromEvents.EventState>,
    private route: ActivatedRoute
  ) {
    this.notes$ = this.noteStore.pipe(select(fromNotes.getAllNotes));
    this.tasks$ = this.taskStore.pipe(select(fromTasks.getAllTasks));
    this.events$ = this.eventStore.pipe(select(fromEvents.getAllEvents));
  }

  ngOnInit() {
    this.notes$.subscribe(notes => {
      if (notes) {
        this.notes = notes;
      }
    });
    this.tasks$.subscribe(tasks => {
      if (tasks) {
        this.tasks = tasks;
      }
    });
    this.events$.subscribe(events => {
      if (events) {
        this.events = events;
      }
    });

    this.route.paramMap.subscribe(params => {
      this.tag = params.get('tag');
      this.filteredNotes = this.notes.filter(n => n.tags.includes(this.tag));
      this.filteredTasks = this.tasks.filter(t => t.tags.includes(this.tag));
      this.filteredEvents = this.events.filter(e => e.tags.includes(this.tag));
    })

  }

}
