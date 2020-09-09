import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  baseUrl : string ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUser(){
   return this.http.get<User[]>(this.baseUrl);
  }

  addUser(user){
    return this.http.post<User>(this.baseUrl,JSON.stringify(user),this.httpOptions);
  }
  
  deleteUser(id){
    return this.http.delete<User>(this.baseUrl+"\\"+id,this.httpOptions);

  }

  editUser(id,user){
    return this.http.put<User>(this.baseUrl+"\\"+id,JSON.stringify(user),this.httpOptions);

  }

  getUserById(id){
    return this.http.get<User>(this.baseUrl+"\\"+id);
  }
}
