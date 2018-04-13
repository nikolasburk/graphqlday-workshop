# Building a GraphQL Server with Node.JS

> This is the repository for the afternoon workshop at [GraphQL Day](https://www.graphqlday.org) 🇳🇱

## Overview

This git repository contains several branches that correspond to the "steps" of the workshops. The `master` branch contains the final version of the code.

## Technology stack

The GraphQL server in this repository is build upon the following technologies:

- [`graphql-yoga`](https://github.com/graphcool/graphql-yoga): A GraphQL server library based on Express.js. It features out-of-the-box support for [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) as well as realtime GraphQL subscriptions.
- [Prisma](https://www.prisma.io): A GraphQL database proxy that makes it easy to connect your GraphQL server to a database and massively simplifies your [resolver](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e#1880) implementations.
- [Docker](https://www.docker.com) (optional): In case you have Docker installed, you can deploy your Prisma APIs locally. Otherwise you can use a free sandbox environment provided by Prisma Cloud.

> **Note**: When using Docker to deploy Prisma locally, the Prisma API is backed by a local MySQL database. If you're using Prisma Cloud, your Prisma API is running against an instance of AWS Aurora.

![](https://imgur.com/Z2Yld5l.png)