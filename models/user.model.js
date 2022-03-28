const userSchema = new mongoose.Schema({
    user_id: String,
    user_first_name: String,
    user_last_name: String,
    user_phone: String,
    arr_orders: [orderSchema]
})

const orderSchema = new mongoose.Schema({
    item_id: String,
    item_name: String,
    item_description: String,
    item_price: Number
})

const User = mongoose.model("users", userSchema);
module.exports = { User, userSchema };

const Order = mongoose.model("orders", orderSchema);
module.exports = { Order, orderSchema };