const express = require('express');
const router = express.Router();

const Customers = require('../models/clientModel')

router.get('/', (req,res) => {
 res.render('customer')
})

router.get('/customerlist', async (req,res) => {
    try{
        const customer = await Customers.find();
        // console.log(customer);
        res.render("customerlist",{ customerlist: customer});
    }catch (error) {
        console.log(error);
    }
});

router.post("/customer", async (req, res) => {
    //console.log(req.body);
    const customers = new Customers(req.body);
    try{
        const savedcustomer = await customers.save((err)=>{
            if (err) {
                console.log(err)
            } else {
                res.redirect('/customer/customerlist');
            }
        });
              //console.log(savedcustomer);
            } catch(error){
              console.log(error);
            }
          
});

module.exports = router;