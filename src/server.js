const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./api/schema');

const app = express();

app.use(express.static('public'));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
