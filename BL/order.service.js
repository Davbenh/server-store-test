
const orderController = require("../DL/controllers/order.controller");
const userController = require("../DL/controllers/user.controller");
const productController = require("../DL/controllers/product.controller");



async function getAllOrder() {
        const orders = await orderController.read({});
        return orders;
}

async function createOrder(order) {
    try {
        const res = await orderController.create(order);
        console.log(res);
        return res;

    }
    catch (e) {
        console.log(e.message);
    }
}

const getOrderById = async (userId) => {
    const res = await orderController.read({userId : userId});
    console.log(res);
    return res;
}


module.exports = {getAllOrder,createOrder,getOrderById}
