const productController = require("../DL/controllers/product.controller");
require("../DL/db").connect();




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
    return await productController.read({id});
}

const addProduct = async(item) => {
    const newProd = await productController.create({
        name: item.name,
        inStock: item.inStock //למלא לפי הסכמה של הפרודוקט
    })
    return newProd;
}

const getAllProducts = async() => {
    const products = await productController.read({})
    
}



module.exports = {
    createNewProduct,
    updateProduct,
    productIsExists
}
