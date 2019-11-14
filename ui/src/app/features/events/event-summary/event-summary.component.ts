import { Component, OnInit, Input } from '@angular/core';
import { Event } from '@models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit {

  @Input() event: Event;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToDetail() {
    this.router.navigate(['events/', this.event.id]);
  }

  selectTag(tag: string) {
    this.router.navigate(['tags/', tag]);
  }

}
