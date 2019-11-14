import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
    {
        path: '',
        component: EventsComponent
    },
    {
        path: 'create',
        component: EventCreateComponent
    },
    {
        path: ':id',
        component: EventDetailComponent
    }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

