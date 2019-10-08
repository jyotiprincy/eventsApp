import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './event.service';
import { LoginComponent } from 'src/app/user/login.component';
import {IEvent} from './index';

@Component({
    templateUrl : 'create-event.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color : #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color : #999}
    .error :-moz-placeholder { color : #999}
    .error : ms-input-placeholder { color : #999 }
  `]
})

export class CreateEventComponent {
    newEvent:IEvent
    isDirty:boolean = true
    event :IEvent 
    constructor(private router : Router, private eventService : EventService){

    }

    ngOnInit(){
        this.event ={
            id: 0,
            name : 'Ng Spectcular',
            date : new Date(),
            time : '10:am',
            price :345.55,
            imageUrl : 'http://ngSpectacular.com/logo.png',
            location : {
                address: '1057 DT',
                city: 'London',
                country: 'England'
            },
            onlineUrl : 'http://ngSpectacular.com'   

        }
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
    cancle() {
        this.router.navigate(['/events'])

    }

}