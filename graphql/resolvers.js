const { getCarList, getCarById } = require('../repository/carRepository');

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
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;