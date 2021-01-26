import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { from } from 'rxjs';
import { UsersService } from '../../../users/services/users.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService:UsersService,
    private router:Router) { }

ngOnInit(): void {
}

public isLogin(){
return this.userService.isLoggedIn();
}

public clickLogout(){
this.userService.logOut();
this.router.navigate(['/']);
}

public getUser(){
return this.userService.getUserData();
}


}
