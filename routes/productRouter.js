const express = require('express');
const productService = require('../BL/product.service');
const router = express.Router();


router.get("/", async (req, res) => {
    let products = await productService.getAllProducts()
    res.send(products);
  });

  router.get("/getOne/:productId", async (req, res) => {
    let productId = req.params.productId
    let products = await productService.getProduct({_id:productId})
    res.send(products);
  });
  router.put("/update/:productId", async (req, res) => {
    let productId = req.params.productId
    console.log('prod id',productId);
    let updatedProduct = await productService.updateProduct({_id:productId},req.body);
    res.send(updatedProduct);
  });


  module.exports = router;