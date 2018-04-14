const { GraphQLObjectType, GraphQLString } = require('graphql');
const I18NString = require('./I18NString');

module.exports = new GraphQLObjectType({
  name: 'Monster',
  fields: {
    name: {
      type: I18NString,
    },
    description: {
      type: I18NString,
    },
    size: {
      type: GraphQLString,
    },
  },
});
