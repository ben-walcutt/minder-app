import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TASKS } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTasks() {
    return of(TASKS);
  }
}
