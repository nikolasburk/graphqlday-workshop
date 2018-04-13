const { GraphQLServer } = require('graphql-yoga')

const postData = [{
  id: 'post-0',
  title: '',
  content: '',
  published: false
}]

const typeDefs = `
  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
  }

  type Query {
    info: String!
    posts: [Post!]!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: () => postData
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))