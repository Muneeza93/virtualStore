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
    itemname: String,
    itemserialno: Number,
    datepay: String,
    nextpayment: String,
    amountpayable: Number,
    refno: String,
    purchasereceipt: String
});

const Customers= mongoose.model('customers', CustomerSchema);

module.exports= Customers;