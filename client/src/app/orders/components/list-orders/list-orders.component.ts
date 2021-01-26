import { Component, OnInit } from '@angular/core';
import {IOrders} from "../../models/IOrders";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  public errorMessage:string;
  public emptyFields:boolean;
  public orders:IOrders[]=[];



  constructor(public  orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((data)=>{
      this.orders=data;
    },(error)=>{
      this.errorMessage=error;
    });
  }

}
