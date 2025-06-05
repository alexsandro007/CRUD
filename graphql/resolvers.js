const { getCarList } = require('../repository/carRepository');

const resolvers = {
  Query: {
    getCarList: async () => {
      return await getCarList();
    },
  },
  Mutation: {
    placeholder: () => 'No mutations implemented yet',
  },
};

module.exports = resolvers;