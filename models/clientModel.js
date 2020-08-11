const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    secondName: String,
    email: String,
    location: String,
    nationalid: String,
    phone: Number,
    gender: String,
    itemname: Number,
    itemserialno: Number,
    datepay: Number,
    nextpayment: Number,
    amountpayable: Number,
    refno: String,
    purchasereceipt: String
});

const Customers= mongoose.model('customers', CustomerSchema);

module.exports= Customers;