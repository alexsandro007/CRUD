const { createOrder: createOrderRepo, getOrderStatus } = require('../repository/orderRepository');

const createOrder = async (orderData) => {
  // Валидация
  if (!orderData.customerName || typeof orderData.customerName !== 'string') {
    throw new Error('Имя заказчика обязательно и должно быть строкой');
  }
  if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
    throw new Error('Список товаров обязателен и должен быть непустым массивом');
  }
  if (orderData.status && !['created', 'in_transit', 'delivered'].includes(orderData.status)) {
    throw new Error('Статус должен быть одним из: created, in_transit, delivered');
  }

  // Преобразование items в JSON-строку
  const order = {
    customerName: orderData.customerName,
    items: JSON.stringify(orderData.items),
    status: orderData.status || 'created' // По умолчанию 'created'
  };

  return await createOrderRepo(order);
};

const checkStatus = async (id) => {
  return await getOrderStatus(id);
};

module.exports = { createOrder, checkStatus };