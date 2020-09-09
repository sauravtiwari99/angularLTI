import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Class/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listOfUsers: User[];
  constructor(private user_service:UserService, private router : Router) { }

  ngOnInit(): void {

    this.user_service.getAllUser().subscribe(data=>{
      this.listOfUsers = data;
      console.log(this.listOfUsers);
    });

  }

  addUser(){
    this.router.navigate(['adduser']);
  }

  deleteUser(id){
    // let index = this.listOfUsers.indexOf(object);
    // this.listOfUsers.splice(index,1);
this.user_service.deleteUser(id).subscribe(data=>{
  console.log("deleted");
  this.ngOnInit();
})
  }

  editUser(id){
    
    // let index = this.listOfUsers.indexOf(object);
    // this.listOfUsers.splice(index,1);
    this.router.navigate(['edituser',id],);
  }

}
