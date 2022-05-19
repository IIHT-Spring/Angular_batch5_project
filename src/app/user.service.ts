import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return this.http.get(BASE_URL)

  }
  createUser(user: {name:string; age: number, Gender: string}) {
    return this.http.post(BASE_URL, user);
  }

  constructor( public http : HttpClient) { }
}
