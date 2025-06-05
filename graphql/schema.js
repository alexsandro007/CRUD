const gql = require('graphql-tag');

const typeDefs = gql`
  enum SortOrder {
    ASC
    DESC
  }

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
    getCarList(filterByBrand: String, sortByBrand: SortOrder): [CarBrand!]!
    getCarById(id: Int!): CarBrand
  }

  type Mutation {
    placeholder: String
  }
`;

module.exports = typeDefs;