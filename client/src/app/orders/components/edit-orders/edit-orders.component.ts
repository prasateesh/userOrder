import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {IOrders} from '../../models/IOrders'
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {
  public orders:IOrders = {
    _id :'',
    orderNumber:'',
    orderDueDate:'',
    customerbuyerName:'',
    customerAddress:'',
    customerPhone:null,
    orderTotal:null
  };
  public selectedOrders:IOrders;
  public orderId:string;
  public errorMessage:string;
  public emptyFields:boolean

  constructor( public activatedRouter:ActivatedRoute, public orderService:OrdersService, public router:Router) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param:ParamMap)=>{
      this.orderId=param.get('id');
    });
    this.orderService.getOrder(this.orderId).subscribe((data)=>{
      this.selectedOrders=data
    },(error)=>{
      this.errorMessage=error;
    })
  }

  public submitUpdateOrder(){
    if(this.selectedOrders.orderNumber !== '' && this.selectedOrders.orderDueDate !== '' && this.selectedOrders.orderTotal !== null &&
      this.selectedOrders.customerPhone !== null && this.selectedOrders.customerbuyerName !== '' && this.selectedOrders.customerAddress!==''){
      this.orderService.updateOrder(this.selectedOrders,this.orderId).subscribe((data) => {
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
