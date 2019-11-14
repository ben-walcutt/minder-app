import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromTasks from '../store/index';
import * as fromNotes from '@notes/store/index';
import * as fromEvents from '@events/store/index';
import { Task } from '@models/task.model';
import { Note } from '@models/note.model';
import { Event } from '@models/event.model';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TasksDeleteAction, TasksUpdateAction, TasksCompleteAction } from '../store/index';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  private tasks$: Observable<Task[]>;
  private task: Task;
  private relatedNotes$: Observable<Note[]>;
  private relatedNote: Note = {
    id: 0,
    author: '',
    title: '',
    text: '',
    tags: [],
    createtime: new Date(),
    lastupdatetime: new Date()
  };
  private relatedEvents$: Observable<Event[]>;
  private relatedEvent: Event = {
    id: 0,
    title: '',
    tags: [],
    creator: '',
    createtime: new Date(),
    lastupdatetime: new Date(),
    starttime: null,
    endtime: null
  };
  private addNoteVisible = false;
  private addEventVisible = false;

  constructor(
    private route: ActivatedRoute,
    private taskStore: Store<fromTasks.TaskState>,
    private noteStore: Store<fromNotes.NoteState>,
    private eventStore: Store<fromEvents.EventState>,
    private messageService: MessageService,
    private router: Router
  ) {
    this.tasks$ = this.taskStore.pipe(select(fromTasks.getAllTasks));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.tasks$.subscribe(tasks => {
        this.task = tasks.find(t => t.id === id);
        this.relatedNotes$ = this.noteStore.pipe(select(fromNotes.getRelated, {ids: [this.task.relatedNotes]}));
        this.relatedEvents$ = this.eventStore.pipe(select(fromEvents.getRelated, {ids: [this.task.relatedEvents]}));
        this.relatedNote.tags = this.task.tags;
        this.relatedEvent.tags = this.task.tags;
      });
    });
  }

  completeTask() {
    this.taskStore.dispatch(new TasksCompleteAction(this.task.id));
  }

  updateTask() {
    this.task.lastupdatetime = new Date();
    this.messageService.add({ severity: 'success', summary: "Task Update", detail: "Task updated!" });
    this.taskStore.dispatch(new TasksUpdateAction(this.task));
    this.router.navigate(['tasks']);
  }

  deleteTask() {
    this.messageService.add({ severity: 'warn', summary: 'Delete Task', detail: 'Task deleted successfully.' });
    this.taskStore.dispatch(new TasksDeleteAction(this.task.id));
    this.router.navigate(['tasks']);
  }

  createNote() {
    this.messageService.add({severity: 'success', summary: 'Related Note', detail: 'Related note added successfully.'});
    this.noteStore.dispatch(new fromNotes.NotesAddRelatedToTaskAction(this.task.id, this.relatedNote));
    this.addNoteVisible = false;
  }

  createEvent() {
    this.messageService.add({severity: 'success', summary: 'Related Event', detail: 'Related event added successfully.'});
    this.eventStore.dispatch(new fromEvents.EventsAddRelatedToTaskAction(this.task.id, this.relatedEvent));
    this.addEventVisible = false;
  }
}
