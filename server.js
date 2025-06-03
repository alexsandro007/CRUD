const express = require('express');
const winston = require('winston');
const sequelize = require('./config/database');
const carRoutes = require('./delivery/carRoutes');
const orderRoutes = require('./delivery/orderRoutes');

// Настройка логгера
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ]
});

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Маршруты
app.use('/api/cars', carRoutes);
app.use('/api/orders', orderRoutes);

// Подключение к базе данных и запуск сервера
sequelize.sync().then(() => {
  logger.info('База данных синхронизирована');
  app.listen(port, () => {
    logger.info(`Сервер запущен на порту ${port}`);
  });
}).catch(err => {
  logger.error('Ошибка подключения к базе данных:', err);
});