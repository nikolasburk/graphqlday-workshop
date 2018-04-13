const { GraphQLServer } = require('graphql-yoga')

const postData = [
  {
    id: 'post-0',
    title: '',
    content: '',
    published: false,
  },
]

const typeDefs = `
type Post {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
}

type Query {
  info: String!
  posts(searchString: String): [Post!]!
  post(id: ID!): Post
}
`

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: (_, args) => {
      return args.searchString
        ? postData.filter(
            post =>
              post.title.includes(args.searchString) ||
              post.content.includes(args.searchString),
          )
        : postData
    },
    post: (_, args) => {
      return postData.find(post => post.id === args.id)
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`),
)
