import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{ path: '', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
