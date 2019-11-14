import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './tasks.state';

export const tasksData = createFeatureSelector<TaskState>('taskState');

export const getIncompleteTasks = createSelector(tasksData, (state: TaskState) => {
    return state.tasks.filter(t => !t.complete);
});

export const getCompleteTasks = createSelector(tasksData, (state: TaskState) => {
    return state.tasks.filter(t => t.complete);
});

export const getAllTasks = createSelector(tasksData, (state: TaskState) => {
    return state.tasks;
});