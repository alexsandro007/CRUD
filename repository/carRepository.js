const CarBrand = require('../models/CarBrand');

const createCar = async (carData) => {
  return await CarBrand.create(carData);
};

const getCar = async (id) => {
  return await CarBrand.findByPk(id);
};

const updateCar = async (id, carData) => {
  const car = await CarBrand.findByPk(id);
  if (!car) return null;
  return await car.update(carData);
};

const deleteCar = async (id) => {
  const car = await CarBrand.findByPk(id);
  if (!car) return false;
  await car.destroy();
  return true;
};

const getCarList = async ({ filterByBrand, sortByBrand } = {}) => {
  const where = {};
  if (filterByBrand) {
    where.brand = {
      [CarBrand.sequelize.Sequelize.Op.like]: `%${filterByBrand}%`
    };
  }

  const order = [];
  if (sortByBrand) {
    order.push(['brand', sortByBrand]);
  }

  return await CarBrand.findAll({
    where,
    order
  });
};

const getCarById = async (id) => {
  return await CarBrand.findByPk(id);
};

module.exports = { createCar, getCar, updateCar, deleteCar, getCarList, getCarById };