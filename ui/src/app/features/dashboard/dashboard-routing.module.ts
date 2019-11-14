import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from '@notes/notes.component';
import { TasksComponent } from '@tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from '@events/events.component';
import { TagsComponent } from '@tags/tags.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'notes',
                loadChildren: () => import('../notes/notes.module').then(mod => mod.NotesModule)
            },
            {
                path: 'tasks',
                loadChildren: () => import('../tasks/tasks.module').then(mod => mod.TasksModule)
            },
            {
                path: 'events',
                loadChildren: () => import('../events/events.module').then(mod => mod.EventsModule)
            },
            {path: 'tags/:tag', component: TagsComponent},
            {path: '', component: DashboardSummaryComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardRoutingModule { }
