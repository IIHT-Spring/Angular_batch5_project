import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import User from "../entity/User"
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  title = 'usersForm';
  
  user: User = new User()
  users: User[]= []

  save() {
    // console.log("the name of the user is " + this.user.name + " age : "+ this.user.age + "who's gender is : "+ this.user.gender);

    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
        alert('something went wrong try again');
      }
    );
  }
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}