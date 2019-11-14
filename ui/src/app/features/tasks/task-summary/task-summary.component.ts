import { Component, OnInit, Input } from '@angular/core';
import { Task } from '@models/task.model';
import * as fromTask from '../store/index';
import { Store } from '@ngrx/store';
import { TasksCompleteAction } from '../store/index';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {
  @Input() task: Task;
  private isOverdue: boolean = false;

  constructor(
    private store: Store<fromTask.TaskState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.isOverdue = moment(this.task.duetime).diff(new Date()) < 0;
  }

  completeTask() {
    this.store.dispatch(new TasksCompleteAction(this.task.id));
  }

  navigateToDetail() {
    this.router.navigate(['tasks/', this.task.id]);
  }

  selectTag(tag: string) {
    this.router.navigate(['tags/', tag]);
  }
}
