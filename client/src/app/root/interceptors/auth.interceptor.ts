import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users/services/users.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService:UsersService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenizedRequest = request.clone({
      setHeaders : {
        'Authorization' : `Bearer ${this.userService.getToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }

}