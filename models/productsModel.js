const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    nameofItem: {
        type:String,
        unique: true
    },
    make: String,
    dateofentry: String,
    category: String,
    serialno: {
        type:Number,
        unique: true
    },
    price: Number,
    initialpay: Number,
    payinterval: Number,
    color:String,
    description: String,
    numberinstock:Number,
    itemphoto:String
});

//storing data in ProductlistSchema
const Products= mongoose.model('productlists', ProductSchema);


module.exports= Products;