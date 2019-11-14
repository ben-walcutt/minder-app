import * as tasksAction from './tasks.actions';
import { TaskState, initialTaskState } from './tasks.state';

let TASK_COUNT = 1;

export function taskReducer(state: TaskState = initialTaskState, action: tasksAction.Actions): TaskState {
    switch(action.type) {
        case tasksAction.TASKS_LOAD: {
            return {
                ...state,
                tasks: action.payload
            }
        }
        case tasksAction.TASKS_ADD: {
            let tasks = state.tasks;
            action.payload.id = TASK_COUNT++;
            tasks.push(action.payload);
            return {
                ...state,
                tasks: tasks
            }
        }
        case tasksAction.TASKS_UPDATE: {
            let tasks = state.tasks.filter(t => t.id !== action.payload.id);
            action.payload.lastupdatetime = new Date();
            tasks.push(action.payload);
            return {
                ...state,
                tasks
            }
        }
        case tasksAction.TASKS_COMPLETE: {
            let task = state.tasks.find(t => t.id === action.payload);
            task.complete = true;
            task.completetime = new Date();
            return {
                ...state,
                tasks: state.tasks
            }
        }
        case tasksAction.TASKS_DEL: {
            let tasks = state.tasks.filter(t => t.id !== action.payload);
            return {
                ...state,
                tasks: tasks
            }
        }
        case tasksAction.TASKS_ADD_RELATED_NOTE: {
            let task = state.tasks.find(t => t.id === action.taskId);
            task.relatedNotes.push(action.noteId);
            return {
                ...state,
                tasks: state.tasks.slice()
            }
        }
        case tasksAction.TASKS_ADD_RELATED_EVENT: {
            let task = state.tasks.find(t => t.id === action.taskId);
            task.relatedEvents.push(action.eventId);
            return {
                ...state,
                tasks: state.tasks.slice()
            }
        }
        default: return state;
    }
}