const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const Products = require('../models/productsModel');

    router.get('/', (req,res) => {
        res.render('products');
    });

    
    
    router.get('/productslist', async (req,res) => {
            try{
                const products = await Products.find();
                // console.log(products);
                res.render("productslist",{ productslist: products});
            }catch (error) {
                console.log(error);
            }
    });
    
    //set storage engine
    const storage = multer.diskStorage({
        destination: './static/uploads',
        filename: function(req, file, cb){
          cb(null,file.fieldname + '-' + Date.now() + 
          path.extname(file.originalname));
          console.log(req.file)
        }
      });
      
      //init Upload
      const upload = multer({
        storage: storage
      })
      
      //check file type
      function checkFileType(file, cb){
        //allowed ext
        const filetypes = /jpeg|jpg|png|gif/;
        //check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        //check mime
        const mimetype = filetypes.test(file.mimetype);
      
        if(mimetype && extname){
          return cb(null,true);
        }else {
          cb('Error:Images only!');
        }
      }
      
      
      // router.post('/products', (req, res) => {
      //   upload(req, res, (err) => {
      //     if(err){
      //       res.render('products', {
      //         msg:err
      //       });
      //     }else {
      //       if(req.file == undefined){
      //         res.render('products', {
      //           msg: 'Error: No file selected!'
      //         });
      //       }else {
      //         res.render('products', {
      //           msg: 'File uploaded!',
      //           file: `uploads/${req.file.filename}`
      //         });
      //       }
      //     }
      //   });
      // });
    
    
    //submits products
    router.post("/products", upload.single('itemphoto'), async (req, res) => {
        // console.log(req.file);
        const products = new Products({
            nameofItem: req.body.nameofItem,
            make: req.body.make,
            dateofentry: req.body.dateofentry,
            category: req.body.category,
            serialno: req.body.serialno,
            price: req.body.price,
            initialpay: req.body.initialpay,
            payinterval: req.body.payinterval,
            color: req.body.color,
            description: req.body.description,
            numberinstock: req.body.numberinstock,
            itemphoto: req.file.path
        });
        try{
            const savedProducts = await products.save();
                  // console.log(req.body);
                  res.redirect('/product/productslist');
                  console.log(savedProducts);
                } catch(error){
                  console.log(error);
                }
              
    });
    
    //delete posts
    router.post('/delete', async (req,res) => {
      try {
        await Products.deleteOne({_id: req.body.id })
        res.redirect('back')
      } catch (error) {
         res.status(400).send("unable to delete to database");
      }
    });
    
    
    
    
    
    


module.exports = router;
