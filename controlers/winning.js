const {Winning}=require("../models/winning.model");

module.exports.GetAllWinnings = async (res)=>{
    try{
        const winnings = await Winning.find({}).populate("user_id", "-_id");
    }
}