const router = require("express").Router();
const userControler = require("../controlers/user");
router.post("/:user",userControler.addUser);
router.get("/getProductByIdUser/:id", userControler.getProductsById);
router.post("/:order",userControler.addOrder);

module.exports=router; 