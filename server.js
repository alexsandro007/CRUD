const express = require('express');
const winston = require('winston');
const sequelize = require('./config/database');
const carRoutes = require('./delivery/carRoutes');
const orderRoutes = require('./delivery/orderRoutes');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./graphql');

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
app.use(express.json()); // Парсинг JSON *обязательно* до Apollo Server
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// REST API маршруты
app.use('/api/cars', carRoutes);
app.use('/api/orders', orderRoutes);

// Настройка Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Включаем интроспекцию для Apollo Studio
});

// Подключение к базе данных и запуск сервера
sequelize.sync().then(async () => {
  logger.info('База данных синхронизирована');

  // Запуск Apollo Server
  await server.start();

  // Подключение Apollo Server к Express
  app.use('/graphql', expressMiddleware(server));

  app.listen(port, () => {
    logger.info(`Сервер запущен на порту ${port}`);
    logger.info(`GraphQL доступен на http://localhost:${port}/graphql`);
  });
}).catch(err => {
  logger.error('Ошибка подключения к базе данных:', err);
});