import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { EditOrdersComponent } from './components/edit-orders/edit-orders.component';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';

@NgModule({
  declarations: [OrdersComponent, ViewOrdersComponent, EditOrdersComponent, AddOrdersComponent, ListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class OrdersModule { }
