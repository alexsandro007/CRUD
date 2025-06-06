const { getCarList, getCarById, createCar, updateCar, deleteCar } = require('../repository/carRepository');

const resolvers = {
  Query: {
    getCarList: async (_, { filterByBrand, sortByBrand }) => {
      return await getCarList({ filterByBrand, sortByBrand });
    },
    getCarById: async (_, { id }) => {
      return await getCarById(id);
    },
    getCarPurchaseCount: async (_, { id }) => {
      const car = await getCarById(id);
      return car ? car.purchaseCount : 0;
    },
  },
  Mutation: {
    createCar: async (_, { input }) => {
      const carData = {
        brand: input.brand,
        model: input.model,
        fuelType: input.fuelType,
        bodyType: input.bodyType,
        purchaseCount: input.purchaseCount || 0,
      };
      return await createCar(carData);
    },
    updateCar: async (_, { id, input }) => {
      const carData = {
        brand: input.brand,
        model: input.model,
        fuelType: input.fuelType,
        bodyType: input.bodyType,
        purchaseCount: input.purchaseCount,
      };
      Object.keys(carData).forEach(key => carData[key] === undefined && delete carData[key]);
      return await updateCar(id, carData);
    },
    deleteCar: async (_, { id }) => {
      return await deleteCar(id);
    },
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;