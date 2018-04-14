const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Reward',
  fields: {
    item_en: {
      type: GraphQLString,
    },
    stack: {
      type: GraphQLInt,
    },
    percentage: {
      type: GraphQLInt,
    },
  },
});
