const mongoose = require("mongoose");
const {User} = require("../models/user.model");
const winningSchema = new mongoose.Schema({
    winning_id: String,
    user_id: User,
    item_id: String,
    winning_date: Date
})

const Winning = mongoose.model("winnings", winningSchema);
module.exports = { Winning, winningSchema };
