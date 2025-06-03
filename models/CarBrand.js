const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CarBrand = sequelize.define('CarBrand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fuelType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bodyType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  purchaseCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'CarBrands',
  timestamps: true
});

module.exports = CarBrand;