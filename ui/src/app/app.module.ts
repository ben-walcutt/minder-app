import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './store/application/application-effects';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { NotesEffects } from './features/notes/store/notes.effects';
import { TasksEffects } from './features/tasks/store/tasks.effects';
import { EventsEffects } from './features/events/store/events.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FeaturesModule,
    ToastModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ApplicationEffects,
      NotesEffects,
      TasksEffects,
      EventsEffects
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Minder Redux'
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
