import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Contact } from './components/contact/contact.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GenderPipe } from './pipes/gender.pipe';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BindingComponent } from './components/binding/binding.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { LikeDislikeComponentComponent } from './components/like-dislike-component/like-dislike-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    Contact,
    EmployeesComponent,
    GenderPipe,
    NotfoundComponent,
    EmployeeListComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    BindingComponent,
    NgclassdemoComponent,
    LikeDislikeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
