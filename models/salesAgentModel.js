const mongoose = require('mongoose');
//employeeschema
const employeeSchema = new mongoose.Schema({
    firstname: String,
    secondname: String,
    email: String,
    password: String,
    retypepassword: String,
    phone: Number,
    gender: String,
    employeeID: String,
    nationalID: String
});

const salesAgent= mongoose.model('salesAgent', employeeSchema);

module.exports= salesAgent;