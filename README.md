# React Driver View

Run the server with

```bash
npm install
npm start
```

Then run the client

```bash
cd client
npm client:start
```

The server part of this system is already designed and exposes a set of REST endpoints via the `/api` route and a GraphQL endpoint.

The client has been setup to consume graphql if you chose to use that instead.

## Task

Build 3 views

- A dashboard with stats and the trips listed in a table.
- A drivers' master-detail page
- A trip page to show the detail for a single trip
