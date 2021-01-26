const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
    orderNumber : {type : String , required : true},
    orderDueDate : {type : String , required : true},
    customerbuyerName : {type : String , required : true},
    customerAddress : {type : String , required : true},
    customerPhone : {type : Number , required : true},
    orderTotal : {type : Number , required : true},
});
let Order = mongoose.model('order', OrderSchema);
module.exports = Order;



