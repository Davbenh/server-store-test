const productController = require("../DL/product.controller");
require("../DL/db").connect();


async function init() {
    try {
        const { status, newProduct } = await createNewProduct(product);
        console.log(status, newProduct);

        // const { updateStatus, updatedProduct } = await updateProduct(product.id, {inStock: 5});
        // console.log(updateStatus, updatedProduct);
    }
    catch(e) {
        console.log(e.message);
    }
}



async function createNewProduct(productData) {

    productValidation(productData);
    const exists = await productIsExists(productData.id);
    if (exists.length > 0) throw new Error("Product id already exists");

    const newProduct = await productController.create(productData);
    return {
        status: 'success',
        newProduct,
    }
}

async function updateProduct(productId, newData) {

    productValidation(newData);
    const exists = await productIsExists(productId);
    if (exists.length != 1 ) throw new Error("Invalid search ID");

    await productController.updateMany({id: productId}, newData);
    const updatedProduct = await productController.read({id: productId})
    return {
        updateStatus: 'success',
        updatedProduct,
    }
}

function productValidation(productData) {
    return true; // Need to add validation
}

async function productIsExists(id) {
    return await productController.read({id,});
}


module.exports={createNewProduct}

let product = [{
    id: 7,
    title: "chicken wings",
    price: 43,
    description: "this is chicken",
    category: {title: "meat"},
    image: "https://img.rami-levy.co.il/product/2680406/5598/medium.jpg",
    inStock: 33
}]

<<<<<<< HEAD
module.exports = {
    createNewProduct,
    updateProduct,
    

}
=======
// init();
>>>>>>> c590f65f07a2dda7b3658fa8b006164fc6eaddd6
