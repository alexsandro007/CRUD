const { createOrder: createOrderRepo, getOrderStatus, updateOrderStatus, deleteOrder } = require('../repository/orderRepository');

const createOrder = async (orderData) => {
  if (!orderData.customerName || typeof orderData.customerName !== 'string') {
    throw new Error('Имя заказчика обязательно и должно быть строкой');
  }
  if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
    throw new Error('Список товаров обязателен и должен быть непустым массивом');
  }
  if (orderData.status && !['created', 'in_transit', 'delivered'].includes(orderData.status)) {
    throw new Error('Статус должен быть одним из: created, in_transit, delivered');
  }

  const order = {
    customerName: orderData.customerName,
    items: JSON.stringify(orderData.items),
    status: orderData.status || 'created'
  };

  return await createOrderRepo(order);
};

const checkStatus = async (id) => {
  return await getOrderStatus(id);
};

const changeStatus = async (id, status) => {
  if (!status) {
    throw new Error('Статус обязателен');
  }
  if (!['created', 'in_transit', 'delivered'].includes(status)) {
    throw new Error('Статус должен быть одним из: created, in_transit, delivered');
  }

  return await updateOrderStatus(id, status);
};

const cancelOrder = async (id) => {
  return await deleteOrder(id);
};

module.exports = { createOrder, checkStatus, changeStatus, cancelOrder };