const router = require("express").Router();
const productControler = require("../controlers/product");
router.get("", productControler.getAllProducts);
router.get("/getProductById/:id", productControler.getProductById);
router.post("/addProduct/:product",productControler.addProduct);
router.post("/removeProduct/:id",productControler.removeProduct);

module.exports=router; 