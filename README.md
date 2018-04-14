# Step 4

Go back to the [`master`](https://github.com/nikolasburk/graphqlday-workshop) branch.

## Usage

### Deploy the Prisma service

```bash
npm install -g prisma
prisma deploy
```

> **Note**: If you don't have [Docker](https://www.docker.com) installed on your machine, you need to remove the [`cluster`](./database/prisma.yml#L9) property from [`prisma.yml`](./database/prisma.yml) and select a _development cluster_ when prompted by the CLI where to deploy your Prisma API. The endpoint that's then printed by the CLI needs to be pasted into [`index.js`](./src/index.js#L29) where `Prisma` is instantied.

### Start the server

```bash
node src/index.js
```

### Open a GraphQL Playground

```bash
npm install -g graphql-cli
graphql playground
```

![](https://imgur.com/bX5TSzs.png)

The Playground now allows to work with both GraphQL APIs side-by-side. It receives its information about the corresponding endpoints and schemas from the configuration in [`.graphqlconfig.yml`](.graphqlconfig.yml):

- `app`: The application layer built with `graphql-yoga`
- `database` The database layer configured with Prisma

## Sample queries/mutations

> In the following queries/mutation, `__POST_ID__` is a placeholder that needs to be replaced with the `id` of an actual `Post` item in your database.

### Application layer (`graphql-yoga`)

```graphql
post(id: "__POST_ID__") {
  id
  title
  content
  published
}
```

```graphql
mutation {
  createDraft(
    title: "How to GraphQL"
    content: "Learn best practices all around developing GraphQL APIs"
  ) {
    id
    published
  }
}
```

```graphql
mutation {
  publish(id: "__POST_ID__") {
    id
    published
  }
}
```

```graphql
mutation {
  deletePost(id: "__POST_ID__") {
    id
    title
    content
    published
  }
}
```

### Database layer (Prisma)

```graphql
query {
  posts(where: {
    title_contains: "QL"
  }) {
    id
    title
    content
    published
  }
}
```

```graphql
query {
  post(where: {
    id: "__POST_ID__"
  }) {
    id
    title
    content
    published
  }
}
```

```graphql
mutation {
  updatePost(
    where: {
      id: "__POST_ID__"
    }
    data: {
      published: true
    }
  ) {
    id
    title
    content
    published
  }
}
```

```graphql
mutation {
  deletePost(where: {
    id: "__POST_ID__"
  }) {
    id
    title
    content
    published
  }
}
```