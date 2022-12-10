require("../DL/db").connect();
const orderController = require("../DL/order.controller");
const userController = require("../DL/user.controller");
const productController = require("../DL/product.controller");


async function getAllOrderPop() {
    try {
        const orders = await orderController.read({});
       
        console.log(orders[0].products);

    }
    catch (e) {
        console.log(e.message);
    }
}
async function getAllOrder() {
    try {
        const orders = await orderController.read({});
        let userId = orders[0].userId
        let user= await userController.read({ _id: userId })
        let productId = await productController.read({_id: orders[0].products[0].product})
        console.log(user[0].email);
        console.log(productId[0].price);

    }
    catch (e) {
        console.log(e.message);
    }
}

async function init(order) {
    try {
        const res = await orderController.create(order);
        console.log(res);

    }
    catch (e) {
        console.log(e.message);
    }
}
const getNewOrderId = () => 3982499



let order = {
    id: getNewOrderId(),
    userId: '63907cac57d46f0f12394609',
    products: [
        {
            product: '6390707a072c7258666ce6df',
            quantity: 5,
            finalPrice: 30
        }, {
            product: '63906c1681bd0168a0ac9f8e',
            quantity: 1,
            finalPrice: 300
        }],
    totalPrice: 315,
}
getAllOrderPop()
init()