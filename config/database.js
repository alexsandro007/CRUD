const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './crud.db',
  logging: false
});

module.exports = sequelize;