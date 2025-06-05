const { getCarList } = require('../repository/carRepository');

const resolvers = {
  Query: {
    getCarList: async (_, { filterByBrand, sortByBrand }) => {
      return await getCarList({ filterByBrand, sortByBrand });
    },
  },
  Mutation: {
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;