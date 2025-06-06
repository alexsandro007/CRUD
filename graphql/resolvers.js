const { getCarList, getCarById, createCar, updateCar } = require('../repository/carRepository');

const resolvers = {
  Query: {
    getCarList: async (_, { filterByBrand, sortByBrand }) => {
      return await getCarList({ filterByBrand, sortByBrand });
    },
    getCarById: async (_, { id }) => {
      return await getCarById(id);
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
      // Удаляем undefined поля
      Object.keys(carData).forEach(key => carData[key] === undefined && delete carData[key]);
      return await updateCar(id, carData);
    },
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;