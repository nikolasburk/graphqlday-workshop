# Building a GraphQL Server with Node.JS

This is the repository for the afternoon workshop at [GraphQL Day](https://www.graphqlday.org) 🇳🇱

## Overview

This git repository contains several branches that correspond to the "steps" to be performed throughout the workshops. The `master` branch contains the final version of the code.

## Usage

### 1. Clone the repository

```bash
git clone git:
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
- [Top 5 Reasons To Use GraphQL](https://blog.graph.cool/top-5-reasons-to-use-graphql-b60cfa683511): Learn the top arguments why GraphQL GraphQL is the future of API development.
- [How to wrap a REST API with GraphQL](https://blog.graph.cool/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d): 
- Article series: GraphQL Server Basics:
  - [Part I: GraphQL Schemas, TypeDefs & Resolvers Explained](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
  - [Part II: The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
  - [Part III: Demystifying the `info` object in GraphQL resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)
- Deployment tutorials:
  - GraphQL servers:
    - [Deploying GraphQL servers with Zeit Now](https://blog.graph.cool/deploying-graphql-servers-with-zeit-now-85f4757b79a7)
    - [Deploying GraphQL servers with Apex Up](https://blog.graph.cool/deploying-graphql-servers-with-apex-up-522f2b75a2ac)
  Prisma:
    - [Deploying Prisma to AWS Fargate with Docker & CloudFormation](https://blog.graph.cool/how-to-deploy-a-prisma-cluster-to-aws-fargate-using-docker-cloudformation-293aa8727b89)
    - [Deploying Prisma DigitalOcean](https://www.prisma.io/docs/tutorials/cluster-deployment/digital-ocean-(docker-machine)-texoo9aemu)
    - [Deploying Prisma to Prisma Cloud](https://www.prisma.io/docs/tutorials/cluster-deployment/prisma-cloud-ua9gai4kie)

## 🇪🇺 GraphQL Europe

Get your tickets for GraphQL Europe [here](https://www.graphql-europe.org/).