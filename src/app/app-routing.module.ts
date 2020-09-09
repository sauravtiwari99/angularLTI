import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { Contact } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BindingComponent } from './components/binding/binding.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { LikeDislikeComponentComponent } from './components/like-dislike-component/like-dislike-component.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: 'home', redirectTo: ""},
  {path:"emp",component:EmployeesComponent},
  {path:"contact",component:Contact},
  {path:"aboutus",component:AboutUsComponent},
  {path:"emplist",component:EmployeeListComponent},
  {path:"form",component:ReactiveFormComponent},
  {path:"users",component:UserComponent},
  {path:"adduser",component:AddUserComponent},
  {path:"edituser/:id",component:EditUserComponent},
  {path:"bindings",component:BindingComponent},
  {path:"ngclass",component:NgclassdemoComponent},
  {path:"likedislike",component:LikeDislikeComponentComponent},
  {path: '404', component:NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
