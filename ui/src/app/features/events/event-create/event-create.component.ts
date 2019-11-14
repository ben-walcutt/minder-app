import { Component, OnInit } from '@angular/core';
import { Event } from '@models/event.model';
import { Store } from '@ngrx/store';
import * as fromEvents from '@events/store/index';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { EventsAddAction } from '@events/store/index';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  private event: Event = {
    id: 0,
    creator: '',
    title: '',
    tags: [],
    createtime: new Date(),
    lastupdatetime: new Date(),
    starttime: new Date(),
    endtime: new Date()
  }
  constructor(
    private eventStore: Store<fromEvents.EventState>,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createEvent() {
    this.eventStore.dispatch(new EventsAddAction(this.event));
    this.messageService.add({severity: 'success', summary: 'Create Event', detail: 'Event created successfully.'});
    this.router.navigate(['/events']);
  }

}
