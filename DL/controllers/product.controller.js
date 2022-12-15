const productData = require("../models/product.model")


async function create(data) {
    return await productData.create(data);
}
 
async function read(filter, specificField) {
    return await productData.find(filter, specificField);
}

async function readOne(filter, proj) {
    return await productData.findOne(filter, proj)
}

async function update(filter, newData) {
    return await productData.findOneAndUpdate(filter, newData, { new: true })
}
 
async function del(ProductId) {
    return update(ProductId, {isActive : false});
}

module.exports = {del, readOne, update, read, create}