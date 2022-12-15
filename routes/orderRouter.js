const express = require('express');
const router = express.Router();
const orderService = require('../BL/order.service');


router.post('/add', async (req, res) => {
    let order = await orderService.createOrder(req.body);
    res.send(order);
  });

  router.get('/', async (req, res) => {
    let allorders = await orderService.getAllOrder(req.body);
    res.send(allorders);
  });

  
  router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    let allorders = await orderService.getOrderById(userId);
    res.send(allorders);
  });




module.exports = router;