import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Class/products';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeDetails=[
    {"name":"saurav","age":21,"subject":"Dotnet",dob:"12/02/1999",gender:"Male"},
  {"name":"Ajay","age":21,"subject":"Java",dob:"12/02/1999",gender:"Female"},
  {"name":"Yogesh","age":21,"subject":"python",dob:"12/02/1999",gender:"Male"},
  {"name":"Rishindra","age":21,"subject":"Spark",dob:"12/02/1999",gender:"Female"}
];

  showFaculty = false;
  facuty = "Rashmi";

  prod:Product ={id:1,name:"Saurav",cost:200000000,category:"Top"}

  products : Product[]=[
    {id:1,name:"Saurav",cost:200000000,category:"Top"},
    {id:1,name:"Saurav",cost:200000000,category:"Top"},
    {id:1,name:"Saurav",cost:200000000,category:"Top"},
    {id:1,name:"Saurav",cost:200000000,category:"Top"}
  ]

  myFunction(){
    alert('You clicked me');
  }

  deleteProduct(id:number){
    alert(`Delted product with id : ${id}`);

  }

  editProduct(id:number, name:string){
    alert(`Edited product with id : ${id} and name : ${name}`);

  }
}
