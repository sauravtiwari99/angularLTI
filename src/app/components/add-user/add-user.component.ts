import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Class/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser : FormGroup
  constructor(private builder : FormBuilder, private service:UserService) { }

  ngOnInit(): void {
    this.addUser= this.builder.group({
      id:[],
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  onSubmit(form : User){
  console.log(form);

  this.service.addUser(form).subscribe(data=>{
    console.log(data)
    window.location.reload();
    alert("User Added Successfully");
    
  })
  }

}
