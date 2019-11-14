import * as eventsActions from './events.actions';
import { EventState, initialEventState } from './events.state';

let EVENT_COUNT = 0;

export function eventReducer(state: EventState = initialEventState, action: eventsActions.Actions): EventState {
    switch (action.type) {
        case eventsActions.EVENTS_LOAD: {
            return {
                ...state,
                events: action.payload
            }
        }
        case eventsActions.EVENTS_ADD: {
            let events = state.events;
            action.payload.id = EVENT_COUNT++;
            events.push(action.payload);
            return {
                ...state,
                events: events
            }
        }
        case eventsActions.EVENTS_UPDATE: {
            let events = state.events.filter(e => e.id !== action.payload.id);
            action.payload.lastupdatetime = new Date();
            events.push(action.payload);
            return {
                ...state,
                events: events
            }
        }
        case eventsActions.EVENTS_DELETE: {
            let events = state.events.filter(e => e.id !== action.payload);
            return {
                ...state,
                events: events
            }
        }
        case eventsActions.EVENTS_ADD_RELATED_TASK: {
            let events = state.events;
            events.push(action.event);
            return {
                ...state,
                events: events.slice()
            }
        }
        default: return state;
    }
}