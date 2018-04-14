const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: (_, args, context, info) => {
      return context.db.query.posts(
        {
          where: {
            OR: [
              {
                title_contains: args.searchString,
              },
              {
                content_contains: args.searchString,
              },
            ],
          },
        },
        info,
      )
    },
    post: (_, args, context, info) => {
      return context.db.query.post(
        {
          where: {
            id: args.id,
          },
        },
        info,
      )
    },
  },
  Mutation: {
    createDraft: (_, args, context, info) => {
      return context.db.mutation.createPost(
        {
          data: {
            title: args.title,
            content: args.content,
          },
        },
        info,
      )
    },
    publish: (_, args, context, info) => {
      return context.db.mutation.updatePost(
        {
          where: {
            id: args.id,
          },
          data: {
            published: true,
          },
        },
        info,
      )
    },
    deletePost: (_, args, context, info) => {
      return context.db.mutation.deletePost(
        {
          where: {
            id: args.id,
          },
        },
        info,
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466/graphqlday-demo/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`),
)
