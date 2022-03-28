const { Product } = require("../models/product.model")

module.exports.getAllProducts = async (res) => {
    let products = await Product.find({});
    return res.send(products)
}

module.exports.getProductById = async (req, res) => {
    let id = req.params.id;
    let products = await Product.find({ "product.id": id });
    return res.send(products)
}

module.exports.addProduct = async (req, res) => {
    let product = req.body;
    let pro = new Product(product);
    // let pro = new Product(req.body); ?
    try {
        await pro.save();
        console.log(pro);
        return res.send(pro);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }

}

module.exports.removeProduct = async (req, res) => {
    let productId = req.params.id;
    try {
        const product = await Product.findByIdAndRemove(productId);
        console.log(product);
        return res.send(product);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}


