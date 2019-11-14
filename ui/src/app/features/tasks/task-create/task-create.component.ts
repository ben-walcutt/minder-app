import { Component, OnInit } from '@angular/core';
import * as fromTasks from '../store/index';
import { Task } from '@models/task.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TasksAddAction } from '../store/index';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  private task: Task = {
    id: 0,
    author: '',
    tags: [],
    title: '',
    text: '',
    relatedNotes: [],
    relatedEvents: [],
    createtime: new Date(),
    lastupdatetime: null,
    duetime: null,
    complete: false,
    completetime: null
  }

  constructor(
    private taskStore: Store<fromTasks.TaskState>,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createTask() {
    this.taskStore.dispatch(new TasksAddAction(this.task));
    this.messageService.add({severity: 'success', summary: 'Create Task', detail: 'Task created successfully.'});
    this.router.navigate(['/tasks']);
  }

}
