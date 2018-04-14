# Building a GraphQL Server with Node.JS

This is the repository for the afternoon workshop at [GraphQL Day](https://www.graphqlday.org) 🇳🇱

## Overview

This git repository contains several branches that correspond to the "steps" to be performed throughout the workshops. The `master` branch contains the final version of the code.

- [Step 0](https://github.com/nikolasburk/graphqlday-workshop/tree/step0): Minimal GraphQL server
- [Step 1](https://github.com/nikolasburk/graphqlday-workshop/tree/step1): Extend API with query arguments
- [Step 2](https://github.com/nikolasburk/graphqlday-workshop/tree/step2): Complete API operations
- [Step 3](https://github.com/nikolasburk/graphqlday-workshop/tree/step3): Add database layer with Prisma and Prisma bindings
- [Step 4](https://github.com/nikolasburk/graphqlday-workshop/tree/step4): Complete API operations against the database

## Usage

### Clone the repository

```bash
git clone git@github.com:nikolasburk/graphqlday-workshop.git
cd graphqlday-workshop
```

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

## Technology stack

The GraphQL server in this repository is build upon the following technologies:

- [`graphql-yoga`](https://github.com/graphcool/graphql-yoga): A GraphQL server library based on Express.js. It features out-of-the-box support for [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) as well as realtime GraphQL subscriptions.
- [Prisma](https://www.prisma.io): A GraphQL database proxy that makes it easy to connect your GraphQL server to a database and massively simplifies your [resolver](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e#1880) implementations.
- [Docker](https://www.docker.com) (optional): In case you have Docker installed, you can deploy your Prisma APIs locally. Otherwise you can use a free sandbox environment provided by Prisma Cloud.

> **Note**: When using Docker to deploy Prisma locally, the Prisma API is backed by a local MySQL database. If you're using Prisma Cloud, your Prisma API is running against an instance of AWS Aurora.

![](https://imgur.com/Z2Yld5l.png)

## Recommended resources

- [Node.JS Tutorial on How to GraphQL](https://www.howtographql.com/graphql-js/0-introduction/): In-depth tutorial covering topics like schema design, GraphQL bindings, authentication and realtime GraphQL subscriptions.
- [GraphQL Boilerplates](https://github.com/graphql-boilerplates): Starter kits for your next GraphQL project, no matter if backend-only (Node, TypeScript, ...) or fullstack (React, Vue, ...). Each boilerplate is build upon industry best practices and uses the latest GraphQL tooling.
- [Top 5 Reasons To Use GraphQL](https://blog.graph.cool/top-5-reasons-to-use-graphql-b60cfa683511): Learn the top arguments why GraphQL is the future of API development.
- [How to wrap a REST API with GraphQL](https://blog.graph.cool/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d): 
- GraphQL Server Basics:
  - [Part I: GraphQL Schemas, TypeDefs & Resolvers Explained](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
  - [Part II: The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
  - [Part III: Demystifying the `info` object in GraphQL resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)
- Deployment tutorials:
  - GraphQL servers:
    - [Deploying GraphQL servers with Zeit Now](https://blog.graph.cool/deploying-graphql-servers-with-zeit-now-85f4757b79a7)
    - [Deploying GraphQL servers with Apex Up](https://blog.graph.cool/deploying-graphql-servers-with-apex-up-522f2b75a2ac)
  - Prisma:
    - [Deploying Prisma to AWS Fargate with Docker & CloudFormation](https://blog.graph.cool/how-to-deploy-a-prisma-cluster-to-aws-fargate-using-docker-cloudformation-293aa8727b89)
    - [Deploying Prisma DigitalOcean](https://www.prisma.io/docs/tutorials/cluster-deployment/digital-ocean-(docker-machine)-texoo9aemu)
    - [Deploying Prisma to Prisma Cloud](https://www.prisma.io/docs/tutorials/cluster-deployment/prisma-cloud-ua9gai4kie)

## 🇪🇺 GraphQL Europe

Get your tickets for GraphQL Europe [here](https://www.graphql-europe.org/).
