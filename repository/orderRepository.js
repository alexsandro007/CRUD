const Order = require('../models/Order');

const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

const getOrderStatus = async (id) => {
  const order = await Order.findByPk(id, {
    attributes: ['status'] // Возвращаем только поле status
  });
  return order ? order.status : null;
};

module.exports = { createOrder, getOrderStatus };