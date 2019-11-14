import { Component, OnInit } from '@angular/core';
import { Task } from '@models/task.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromTasks from './store/index';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks$: Observable<Task[]>;
  private selectedTask: Task;

  constructor(
    private taskStore: Store<fromTasks.TaskState>,
    private router: Router
  ) {
    this.tasks$ = this.taskStore.pipe(select(fromTasks.getAllTasks));
  }

  ngOnInit() {
  }

  generateBadges(tags: string[]): string {
    return tags.join(' ');
  }

  onRowSelect(event: any) {
    this.router.navigate(['tasks/', event.data.id])
  }

  isOverdue(task: Task): boolean {
    return moment(task.duetime).diff(new Date()) < 0;
  }
}
