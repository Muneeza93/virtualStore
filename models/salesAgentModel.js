const mongoose = require('mongoose');
//employeeschema
const employeeSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    password: String,
    RetypePassword: String,
    phone: Number,
    gender: String,
    EmployeeID: String,
    NationalID: String
});

const salesAgent= mongoose.model('salesAgent', employeeSchema);

module.exports= salesAgent;