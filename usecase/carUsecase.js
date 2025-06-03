const { createCar: createCarRepo, getCar: getCarRepo, updateCar: updateCarRepo, deleteCar: deleteCarRepo, getCarList: getCarListRepo } = require('../repository/carRepository');

const createCar = async (carData) => {
  if (!carData.brand || !carData.model || !carData.fuelType || !carData.bodyType) {
    throw new Error('Все поля (brand, model, fuelType, bodyType) обязательны');
  }
  return await createCarRepo(carData);
};

const getCar = async (id) => {
  return await getCarRepo(id);
};

const updateCar = async (id, carData) => {
  return await updateCarRepo(id, carData);
};

const deleteCar = async (id) => {
  return await deleteCarRepo(id);
};

const getCarList = async () => {
  return await getCarListRepo();
};

module.exports = { createCar, getCar, updateCar, deleteCar, getCarList };