const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.render('index')
});

// router.get('/productdetails', (req,res) => {
//   res.render('productdetails')
// });


module.exports = router;

  




  
  
