import { Injectable } from '@angular/core';
import { Event } from 'src/app/Class/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor() { }

  event:Event[]=[
    { id: 1, name: 'Angular', description: 'Angular Event', speaker: 'Himanshu' },
    { id: 2, name: 'React', description: 'React Event', speaker: 'Saurabh' },
    { id: 3, name: 'Java', description: 'Java Event', speaker: 'Meenal' }
];

ListOfEvent():Event[]{
return this.event;
}

delete(value:Event){

  let index = this.event.indexOf(value);
  this.event = this.event.splice(index, 1);

  }
 
  AddRecord(id1,name1,desc1,speaker1){
    this.event.push({id:id1,name:name1,description:desc1,speaker:speaker1});
    console.log("added")
  }

  

}

