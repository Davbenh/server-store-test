const express = require('express');
const userService = require('../BL/user.service');
const router = express.Router();


router.post('/add', async (req, res) => {
    let user = await userService.createNewUser(req.body);
    res.send("user created");
  });


  module.exports = router;