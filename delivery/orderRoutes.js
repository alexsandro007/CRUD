const express = require('express');
const router = express.Router();
const { createOrder } = require('../usecase/orderUsecase');

router.post('/createOrder', async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;