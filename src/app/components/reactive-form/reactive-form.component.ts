import { Component, OnInit } from '@angular/core';
import { FormGroup,Validator,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
  export class ReactiveFormComponent implements OnInit {
  form:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup({
      name: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      contact: new FormControl("",[Validators.required,Validators.pattern('[0-9]{10}')]),
      email: new FormControl("",[Validators.required,Validators.email])
    })
  }

  addUser(form){
    console.log(form.value);
  }


}
