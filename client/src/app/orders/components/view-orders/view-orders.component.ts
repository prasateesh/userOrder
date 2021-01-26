import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {IOrders} from '../../models/IOrders'
import {OrdersService} from '../../services/orders.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

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
  public clickDeleteProduct(productId){
    this.orderService.deleteOrder(productId).subscribe((data) => {
      this.orderService.getAllOrders().subscribe((data) => {
        this.orders = data;
      }, (error) => {
        console.log(error);
        this.errorMessage = error;
      });
    }, (error) => {
      console.log(error);
      this.errorMessage = error;
    })
  }
}
