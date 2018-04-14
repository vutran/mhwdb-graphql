const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');
const { fetchData } = require('./util');
const Monster = require('./types/Monster');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    monster: {
      type: new GraphQLList(Monster),
      resolve() {
        return fetchData('monsters/monster_base.json');
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
