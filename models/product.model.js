const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: String,
    item_name: String,
    item_description: String,
    item_price: Number
    //  type: mongoose.Types.ObjectId,
});

const Product=mongoose.model("products",productSchema);
module.exports={Product,productSchema}