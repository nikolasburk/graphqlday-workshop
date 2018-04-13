const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`
  }
}