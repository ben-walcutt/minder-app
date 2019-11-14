import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from '@models/event.model';
import { EVENTS } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  getAllEvents(): Observable<Event[]> {
    return of(EVENTS);
  }

  addEvent(event: Event): Observable<Event> {
    event.id = EVENTS.length;
    return of(event);
  }
}
