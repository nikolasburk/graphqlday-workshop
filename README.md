# Step 2

Go back to the [`master`](https://github.com/nikolasburk/graphqlday-workshop) branch.

## Usage

```bash
node src/index.js
```

## Sample queries/mutations

```graphql
post(id: "post-0") {
  id
  title
  content
  published
}
```

```graphql
mutation {
  createDraft(
    title: ""
    content: ""
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