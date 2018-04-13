const { GraphQLServer } = require('graphql-yoga')

const postData = [
  {
    id: 'post-0',
    title: '',
    content: '',
    published: false,
  },
]
let idCount = postData.length

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
    }
  },
  Mutation: {
    createDraft: (_, args) => {
      const newDraft = {
        id: `post-${idCount++}`,
        title: args.title,
        content: args.content,
        published: false
      }
      postData.push(newDraft)
      return newDraft
    },
    publish: (_, args) => {
      const postToPublish = postData.find(post => post.id === args.id)
      postToPublish.published = true
      return postToPublish
    },
    deletePost: (_, args) => {
      const postToDeleteIndex = postData.findIndex(post => post.id === args.id)
      if (postToDeleteIndex > -1) {
        const deleted = postData.splice(postToDeleteIndex, 1)
        return deleted[0]
      }
      return null
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`),
)
