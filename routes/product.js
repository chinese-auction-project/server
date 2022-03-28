const router = require("express").Router();
const productControler = require("../controlers/product");
router.get("", productControler.getAllProducts);
router.get("/byId/:id", productControler.getProductById);
router.post("",productControler.addProduct);
router.post("/byId:id",productControler.removeProduct);
 
module.exports=router;