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

  input CreateCarInput {
    brand: String!
    model: String!
    fuelType: String!
    bodyType: String!
    purchaseCount: Int
  }

  input UpdateCarInput {
    brand: String
    model: String
    fuelType: String
    bodyType: String
    purchaseCount: Int
  }

  type Query {
    getCarList(filterByBrand: String, sortByBrand: SortOrder): [CarBrand!]!
    getCarById(id: Int!): CarBrand
  }

  type Mutation {
    createCar(input: CreateCarInput!): CarBrand!
    updateCar(id: Int!, input: UpdateCarInput!): CarBrand
    deleteCar(id: Int!): Boolean!
    placeholder: String
  }
`;

module.exports = typeDefs;