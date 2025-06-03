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

const getCarList = async () => {
  return await CarBrand.findAll();
};

module.exports = { createCar, getCar, updateCar, deleteCar, getCarList };