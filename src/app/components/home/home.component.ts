import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  name=[{"name":"saurav","age":21},
  {"name":"Ajay","age":21},
  {"name":"Yogesh","age":21},
  {"name":"Rishindra","age":21}]

}
