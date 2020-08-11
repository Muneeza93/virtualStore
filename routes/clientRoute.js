const express = require('express');
const Customers = require('../models/clientModel')

const router = express.Router();

router.get('/', (req,res) => {
 res.render('customer')
})

router.get('/customerlist', async (req,res) => {
    try{
        const customer = await Customers.find();
        console.log(customer);
        res.render("customerlist",{ customerlist: customer});
    }catch (error) {
        console.log(error);
    }
});

router.post("/customer", async (req, res) => {
    console.log(req.body);
    const customers = new customer(req.body);
    try{
        const savedcustomer = await customers.save();
              res.redirect('/customer/customerlist');
              console.log(savedcustomer);
            } catch(error){
              console.log(error);
            }
          
});

module.exports = router;