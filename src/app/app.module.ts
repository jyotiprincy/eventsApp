import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {
  EventsListComponent ,
  EventThumbnailComponent ,
  EventService ,
  EventDetailsComponent ,
  CreateEventComponent ,

  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
<<<<<<< HEAD
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe,
  EventResolver
=======
  DurationPipe
>>>>>>> parent of 734c0a7... latest updated file
} from './events/index'

import {
  JQ_TOKEN,
  Toastr,
  TOASTR_TOKEN,
  collapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from '../assets/common/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './nav/routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { from } from 'rxjs';
import { Session } from 'protractor';



let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],

  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
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

