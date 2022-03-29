const router = require("express").Router();
const winningControler = require("../controlers/winning");

router.post("addWinning/:winning",winningControler.addWinning);
router.get("/GetUsersByItemId/:item_id", winningControler.GetUsersByItemId);
router.get("/GetWinnerByWinningId/:winning_id", winningControler.GetWinnerByWinningId);
router.get("/GetWinnerByItemId/:item_id", winningControler.GetWinnerByItemId);

module.exports=router; 
