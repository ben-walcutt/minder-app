import { EventState } from './events.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';
import { Event } from '@models/event.model';

export const eventsData = createFeatureSelector<EventState>('eventState');

export const getUpcomingEvents = createSelector(eventsData, (state: EventState)  => {
    return state.events.filter(e => {
        return moment(e.starttime).diff(new Date()) > 0;
    })
});

export const getAllEvents = createSelector(eventsData, (state: EventState) => {
    return state.events;
});

export const getRelated = createSelector(getAllEvents, (events: Event[], props: any) => {
    return events.filter(e => props.ids[0].includes(e.id))
});