import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  
  itemCount: number = 1;
btnText:string="Add an Item";
message:string="Hello Students";
goals=[];
goal='Be a good human being-Never lie';
constructor() { }  
ngOnInit() {}

addItem() {
    this.goals.push(this.goal);  
      this.goal= ''; 
       this.itemCount = this.goals.length;
  }
}
