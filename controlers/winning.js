const { Winning, winningSchema } = require("../models/winning.model");
const {User} = require("../models/user.model");

module.exports.addWinning = async (req, res) => {
    let win = new Winning(req.body);
    try {
        await win.save();
        console.log(win);
        return res.send(win);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}

module.exports.GetUsersByItemId = async (req, res) => {
    try {
        const users = await User.find(`user.arr_orders.find({item_id : ${req.params.item_id}` );
        console.log(winnings);
        return res.send(winnings);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}
module.exports.GetWinnerByWinningId = async(req, res) =>{
   
    try {
        const winner = await Winning.find({"item.winning_id":req.params.winning_id}).populate("user_id");
        console.log(winner);
        return res.send(winner);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}

module.exports.GetWinnerByItemId = async(req, res) =>{
   
    try {
        const winner = await Winning.find({"item.item_id":req.params.item_id}).populate("user_id");
        console.log(winner);
        return res.send(winner);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}