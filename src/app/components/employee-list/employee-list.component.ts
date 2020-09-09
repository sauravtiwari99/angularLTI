import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {Event} from "src/app/Class/Event";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private eventObj : EventService) { }

  ngOnInit(): void {
    //this.showEmpList();
  }
  EmpList:Event[];
  showEmp = false;

  showEmpList(){

  console.log("in ")
  this.EmpList= this.eventObj.ListOfEvent();
  console.log(this.EmpList)

  }

  deleteDetails(value:Event){

    this.eventObj.delete(value);
  }

  AddRecord(id,name,desc,speaker){
    this.eventObj.AddRecord(id,name,desc,speaker);
  }

}
