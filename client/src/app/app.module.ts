import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './root/components/nav/nav.component';
import { HomeComponent } from './root/components/home/home.component';
import { FormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { OrdersService } from './orders/services/orders.service';
import { UsersService } from './users/services/users.service';
import {AuthInterceptor} from './root/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
