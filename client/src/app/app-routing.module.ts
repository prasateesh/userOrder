import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './root/components/home/home.component';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
 { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
