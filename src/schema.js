const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const { fetchData } = require('./util');
const Monster = require('./types/Monster');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    monster: {
      description: 'Fetch monsters',
      type: new GraphQLList(Monster),
      args: {
        monster: {
          type: GraphQLString,
          defalutValue: '',
          description: 'Filter by monster name',
        },
      },
      resolve(parent, args) {
        return fetchData('monsters/monster_base.json').then(data =>
          data.filter(monster => monster.name.en === args.monster)
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
