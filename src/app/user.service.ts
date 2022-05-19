import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  createUser(user: {name:string; age: number, Gender: string}) {
    return this.http.post("http://localhost:3000/users", user);
  }

  constructor( public http : HttpClient) { }
}
