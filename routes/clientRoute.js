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

// delete posts
router.post('/delete', async (req,res) => {
    try {
      await Customers.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  });

module.exports = router;