# Step 2

Go back to the [`master`](https://github.com/nikolasburk/graphqlday-workshop) branch.

## Usage

```bash
node src/index.js
```

## Sample queries/mutations

```graphql
query {
  posts(searchString: "QL") {
    id
    title
    content
    published
  }
}
```


```graphql
query {
  post(id: "post-0") {
    id
    title
    content
    published
  }
}
```

```graphql
mutation {
  createDraft(
    title: "GraphQL Bindings"
    content: "Reuse and compose GraphQL APIs"
  ) {
    id
    published
  }
}
```

```graphql
mutation {
  publish(id: "post-0") {
    id
    published
  }
}
```

```graphql
mutation {
  deletePost(id: "post-0") {
    id
    title
    content
    published
  }
}
```