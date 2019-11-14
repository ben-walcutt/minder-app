import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@models/event.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromEvents from '../store/index';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { EventsUpdateAction, EventsDeleteAction } from '../store/events.actions';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  private events$: Observable<Event[]>;
  private event: Event;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventStore: Store<fromEvents.EventState>,
    private messageService: MessageService,
    private router: Router
  ) {
    this.events$ = this.eventStore.pipe(select(fromEvents.getAllEvents));
  }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.events$.subscribe(data => {
      if (data) {
        this.event = data.find(x => x.id === id);
      }
    })
  }

  updateEvent() {
    this.event.lastupdatetime = new Date();
    this.messageService.add({severity: 'success', summary: 'Event Update', detail: 'Event updated'});
    this.eventStore.dispatch(new EventsUpdateAction(this.event));
    this.router.navigate(['events']);
  }

  deleteEvent() {
    this.messageService.add({severity: 'success', summary: 'Delete Event', detail: 'Event deleted successfully.'});
    this.eventStore.dispatch(new EventsDeleteAction(this.event.id));
    this.router.navigate(['events']);
  }

}
