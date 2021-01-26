const express = require('express');
const router = express.Router();
const Orders = require('../models/IOrders');
const authenticate = require('../midleware/authenticate');

/*
    INFO : GET all the orders
    URL : http://127.0.0.1:5000/api/orders/
	METHOD : GET
	Fields : no-fields
	express function : router.get();

 */
router.get('/orders', async (request , response) => {
  try {
    let orders = await Orders.find();
    response.status(200).json(orders);
  }
  catch (error) {
    response.status(500).json({
      error : error
    });
  }
});

/*
    INFO : GET a single Orders
    URL : http://127.0.0.1:5000/api/orders/:id
	METHOD : GET
	Fields : no-fields
	express function : router.get();
 */
router.get('/orders/:id',async (request , response) => {
  let orderId = request.params.id;
  try {
    let orders = await Orders.findById(orderId); // select * from Orders where id=''
    response.status(200).json(orders);
  }
  catch (error) {
    response.status(500).json({
      error : error
    });
  }
});

/*
    INFO : Create a Orders
    URL : http://127.0.0.1:5000/api/orders/
	METHOD : POST
	Fields : orderNumber , orderDueDate , customerbuyerName , customerAddress , customerPhone,orderTotal
	express function : router.post();
 */
router.post('/orders', async (request , response) => {
  try {
    let newOrder = {
        orderNumber : request.body.orderNumber,
        orderDueDate : request.body.orderDueDate,
        customerbuyerName : request.body.customerbuyerName,
        customerAddress : request.body.customerAddress,
        customerPhone : request.body.customerPhone,
        orderTotal : request.body.orderTotal
    };

    //check the Orders is exists or not
    let order = await Orders.findOne({name : newOrder.orderNumber});
    if(order){
      return response.status(400).json({
        result : 'Failed',
        message : 'Order is already exists'

      });
    }
    order = new Orders(newOrder);
    order = await order.save(); // INSERT data to database

    response.status(200).json(order);
  }
  catch (error) {
    response.status(500).json({
      error : error
    });
  }
});

/*
    INFO : Update a Orders
    URL : http://127.0.0.1:5000/api/orders/:id
	METHOD : PUT
	Fields : orderNumber , orderDueDate , customerbuyerName , customerAddress , customerPhone,orderTotal
	express function : router.put();
 */
router.put('/orders/:id', async (request , response) => {
  let orderId = request.params.id;
  try {
    let updatedOrders = {
        orderNumber : request.body.orderNumber,
        orderDueDate : request.body.orderDueDate,
        customerbuyerName : request.body.customerbuyerName,
        customerAddress : request.body.customerAddress,
        customerPhone : request.body.customerPhone,
        orderTotal : request.body.orderTotal
    };
    let order = await Orders.findById(orderId);
    if(order){
      order = await Orders.findByIdAndUpdate(orderId , {
        $set : updatedOrders
      }, {new : true});
      response.status(200).json(order);
    }
    else{
      return response.status(400).json({
        result : 'failed',
        message : 'No Orders is found to update'
      });
    }
  }
  catch (error) {
    response.status(500).json({
      error : error
    });
  }
});

/*
    INFO : Delete a Orders
    URL : http://127.0.0.1:5000/api/orders/:id
	METHOD : DELETE
	Fields : no-fields
	express function : router.delete();
 */
router.delete('/orders/:id', async (request , response) => {
  let orderId = request.params.id;
  try {
    let order = await Orders.findByIdAndDelete(orderId);
    response.status(200).json(order)
  }
  catch (error) {
    response.status(500).json({
      error : error
    });
  }
});

module.exports = router;
