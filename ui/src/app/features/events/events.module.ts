import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventSummaryComponent } from './event-summary/event-summary.component';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { EventsRoutingModule } from './events-routing.module';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [EventsComponent, EventCreateComponent, EventDetailComponent, EventSummaryComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ChipsModule,
    CalendarModule,
    TableModule,
    SharedModule
  ],
  exports: [
    EventSummaryComponent
  ]
})
export class EventsModule { }
