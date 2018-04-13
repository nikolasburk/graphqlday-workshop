# Step 1

Go back to the [`master`](https://github.com/nikolasburk/graphqlday-workshop) branch.

## Usage

```bash
node src/index.js
```

## Sample queries/mutations

```graphql
posts(searchString: "QL") {
  id
  title
  content
  published
}
```

```graphql
post(id: "post-0") {
  id
  title
  content
  published
}
```
