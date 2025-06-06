const Order = require('../models/Order');

const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

const getOrderStatus = async (id) => {
  const order = await Order.findByPk(id, {
    attributes: ['status']
  });
  return order ? order.status : null;
};

const updateOrderStatus = async (id, status) => {
  const order = await Order.findByPk(id);
  if (!order) return null;
  await order.update({ status });
  return order.status;
};

const deleteOrder = async (id) => {
  const order = await Order.findByPk(id);
  if (!order) return false;
  await order.destroy();
  return true;
};

module.exports = { createOrder, getOrderStatus, updateOrderStatus, deleteOrder };