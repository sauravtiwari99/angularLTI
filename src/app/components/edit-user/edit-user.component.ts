import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Class/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
id;
addUser : FormGroup
userDetails:User;
  constructor(private route:ActivatedRoute,private builder : FormBuilder, private service:UserService) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);

   this.service.getUserById(this.id).subscribe(data=>{
    this.userDetails= data;
    

   this.addUser= this.builder.group({
    id:[],
    firstname:[this.userDetails["firstname"],Validators.required],
    lastname:[this.userDetails["lastname"],Validators.required],
    email:[this.userDetails["email"],[Validators.required,Validators.email]]
  })

  })
  }

  
  onSubmit(form : User){
  console.log(form);

  this.service.editUser(this.id,form).subscribe(data=>{
    console.log(data)
    window.location.reload();
    alert("User Edited Successfully");
    
  })
  }


}
