const gql = require('graphql-tag');

const typeDefs = gql`
  type CarBrand {
    id: Int!
    brand: String!
    model: String!
    fuelType: String!
    bodyType: String!
    purchaseCount: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getCarList: [CarBrand!]!
  }

  type Mutation {
    # Заготовка для будущих мутаций
    placeholder: String
  }
`;

module.exports = typeDefs;