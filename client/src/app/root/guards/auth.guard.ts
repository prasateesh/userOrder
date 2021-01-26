import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private userService:UsersService){}
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      let token=this.userService.getToken();
      if(token){
    return true;
      }
      this.router.navigate(['/users/login']);
      return false;
    }
}
