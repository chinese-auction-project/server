const { User } = require("../models/user.model");
const { Order } = require("../models/user.model");
// const product=require("../models/product.model");

module.exports.addUser = async (req, res) => {
    let user = new User(req.body);
    try {
        await user.save();
        console.log(user);
        return res.send(user);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}

module.exports.getProductsById = async (req, res) => {
    let id = req.params.user_id;
    try {
        let user = await users.findById(id)
        let orders = user.arr_orders;
        return res.send(orders)
    }
    catch (e) {
        console.log(e)
        return res.status(400).send(e);
    }
}

module.exports.addOrder = async (req, res) => {
    // do it yourself
    // ???
    let { id, ...ordered, order_details } = req.body;
    try {

        let user = await User.findById(id);
        if (!user) {
            user = new User(id, ...ordered)
        }
        user.arr_orders.push(new Order(order_details));
        await user.save();
        console.log(user);
        return res.send(user);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}

