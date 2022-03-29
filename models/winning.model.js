const mongoose = require("mongoose");

const {User} = require("./user.model");
const {Product} = require("./product.model");

const winningSchema = new mongoose.Schema({
    winning_id: String,
    user_id: User,
    item_id: Product,
    winning_date: Date
})

const Winning = mongoose.model("winnings", winningSchema);
module.exports = { Winning, winningSchema };
