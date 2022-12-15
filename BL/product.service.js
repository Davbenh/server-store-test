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

const updateProduct = async (filter,newData) => {
    return await productController.update(filter,newData); //אובייקט ריק מחזיר את כל הרשומות
  };


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
    return products;

}

const getProduct = async (filter,proj) => {
    return await productController.readOne(filter,proj); //אובייקט ריק מחזיר את כל הרשומות
  };




module.exports = {
    createNewProduct,
    updateProduct,
    productIsExists,
    addProduct,
    getAllProducts,
    getProduct
}
