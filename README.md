# Step 0

Go back to the [`master`](https://github.com/nikolasburk/graphqlday-workshop) branch.

## Usage

```bash
node src/index.js
```

## Sample queries/mutations

```graphql
query {
  info
}
```

```graphql
query {
  posts {
    id
    title
    content
    published
  }
}
```