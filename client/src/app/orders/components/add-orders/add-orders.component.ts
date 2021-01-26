import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IOrders} from '../../models/IOrders';
import {OrdersService} from '../../services/orders.service';


@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {
  public orders:IOrders = {
    _id :'',
    orderNumber:'', 
    orderDueDate:'',
    customerbuyerName:'',
    customerAddress:'',
    customerPhone:null,
    orderTotal:null
  };
  public errorMessage:string;
  public emptyFields:boolean;

  constructor(public orderService:OrdersService, public router:Router) { }

  ngOnInit(): void {
  }

  public submitCreateOrder(){
    if(this.orders.orderNumber !== '' && this.orders.orderDueDate !== '' && this.orders.orderTotal !== null &&
      this.orders.customerPhone !== null && this.orders.customerbuyerName !== '' && this.orders.customerAddress!==''){
      this.orderService.createOrder(this.orders).subscribe((data) => {
        this.router.navigate(['/orders/view-orders']);
      }, (error) => {
        this.errorMessage = error;
      });
    }
    else{
      this.emptyFields = true;
    }
  }
  
}
