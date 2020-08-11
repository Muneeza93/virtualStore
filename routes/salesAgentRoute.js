const express = require('express');

const router = express.Router();
const salesAgent = require('../models/salesAgentModel');

//get back all sales agents
router.get('/', (req,res) => {
    res.render('salesAgent');
});

//submits salesagent
router.post("/salesAgent", async (req, res) => {
    console.log(req.body);
    const employee = new salesAgent(req.body);
    try{
        const savedEmployee = await employee.save();
              res.redirect('/sales/salesAgentlist');
              // console.log(savedEmployee);
            } catch(error){
              console.log(error);
            }
          
});

router.get('/salesAgentlist', async (req,res) => {
    try{
        const salesagent = await salesAgent.find();
        // console.log(salesagent);
        res.render("salesAgentlist",{salesAgentlist: salesagent});
    }catch (error) {
        console.log(error);
    }
});

// router.post("/delete", async (req, res) => {
//     if (req.session.user) {
//     try {
//       await Registration.deleteOne({_id: req.body.id })
//       res.redirect('back')
//     } catch (error) {
//        res.status(400).send("unable to delete to database");
//     }
//   } else {
//     console.log("cant find session")
//     res.redirect('/login')
//   }
// })

router.post("/delete", async (req, res) => {
        
        try {
          await salesAgent.deleteOne({_id: req.body.id })
          res.redirect('back')
        } catch (error) {
           res.status(400).send("unable to delete to database");
        }
      });


      router.get("/agentlogin", (req, res) => {
        res.render("agentlogin");
      });

module.exports = router; 