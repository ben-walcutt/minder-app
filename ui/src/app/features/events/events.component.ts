import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@models/event.model';
import * as fromEvents from './store/index';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private events$: Observable<Event[]>;
  private selectedEvent: Event;

  constructor(
    private eventStore: Store<fromEvents.EventState>,
    private router: Router
  ) {
    this.events$ = this.eventStore.pipe(select(fromEvents.getAllEvents));
  }

  ngOnInit() {
  }

  generateBadges(tags: string[]): string {
    return tags.join(' ');
  }

  onRowSelect(event: any) {
    this.router.navigate(['events/', event.data.id]);
  }

}
