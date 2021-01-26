import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';
import { EditOrdersComponent } from './components/edit-orders/edit-orders.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';

import { OrdersComponent } from './orders.component';
import {ListOrdersComponent} from "./components/list-orders/list-orders.component";

const routes: Routes = [{ path: '', component: OrdersComponent },
{path:'view-orders',component:ViewOrdersComponent},
  {path:'list-orders',component:ListOrdersComponent},
  {path:'add-orders',component:AddOrdersComponent},
{path:':id',component:EditOrdersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
