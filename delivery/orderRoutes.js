const express = require('express');
const router = express.Router();
const { createOrder, checkStatus } = require('../usecase/orderUsecase');

router.post('/createOrder', async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/checkStatus/:id', async (req, res) => {
  try {
    const status = await checkStatus(req.params.id);
    if (!status) return res.status(404).json({ error: 'Заказ не найден' });
    res.json({ status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;