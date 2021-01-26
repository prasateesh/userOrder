import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 
  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public errorMessage:string;
  public message:string;
  public  token:string
  constructor(private router:Router,private userService:UsersService) { }

  ngOnInit(): void {
  }
  userRegistration() {
    this.userService.register(this.user).subscribe((data) => {
      console.log("usersfsdbf");
      console.log(data)
        this.message = data.result;
        this.router.navigate(['/users/login']);
      },
      (error) => {
        this.errorMessage = error;
      })
  }
}
