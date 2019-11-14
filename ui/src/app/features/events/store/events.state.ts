import { Event } from '@models/event.model';

export interface EventState {
    events: Event[]
}

export const initialEventState: EventState = {
    events: []
}