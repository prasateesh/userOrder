import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IOrders} from '../models/IOrders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient:HttpClient) { }

  // Get all Orders
  public getAllOrders():Observable<IOrders[]>{
    let dataURL = 'http://127.0.0.1:5000/api/orders/';
    return this.httpClient.get<IOrders[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Get a Single Order
  public getOrder(orderId):Observable<IOrders>{
    let dataURL = `http://127.0.0.1:5000/api/orders/${orderId}`;
    return this.httpClient.get<IOrders>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Create a Order
  public createOrder(order:IOrders):Observable<IOrders>{
    let dataURL = `http://127.0.0.1:5000/api/orders/`;
    return this.httpClient.post<IOrders>(dataURL, order).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Update a Order
  public updateOrder(order:IOrders , orderId:string):Observable<IOrders>{
    let dataURL = `http://127.0.0.1:5000/api/orders/${orderId}`;
    return this.httpClient.put<IOrders>(dataURL, order).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Delete a Order
  public deleteOrder(orderId:string):Observable<IOrders>{
    let dataURL = `http://127.0.0.1:5000/api/orders/${orderId}`;
    return this.httpClient.delete<IOrders>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else{
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }}
