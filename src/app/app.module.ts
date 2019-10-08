import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
  EventListComponent ,
  EventThumbnailComponent ,
  EventService ,
  EventDetailsComponent ,
  CreateEventComponent ,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOASTR_TOKEN, Toastr } from '../assets/common/toastr.service';
import { appRoutes } from './nav/routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { from } from 'rxjs';
import { Session } from 'protractor';


import {collapsibleWellComponent } from '../assets/common/collapsible-well.component';

let toastr:Toastr = window['toastr'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    DurationPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    AuthService,
    {provide : 'canDeactivateCreateEvent',
     useValue: checkDirtyState
    }
  
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
 if(component.isDirty)
  return window.confirm('you have not save this event, do you really want to cancle ?')
  return true
}
