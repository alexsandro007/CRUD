const { getCarList, getCarById, createCar } = require('../repository/carRepository');

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
        purchaseCount: input.purchaseCount || 0, // Значение по умолчанию
      };
      return await createCar(carData);
    },
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;