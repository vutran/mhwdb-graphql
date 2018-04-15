const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'I18NString',
  fields: {
    en: {
      type: GraphQLString,
    },
    ja: {
      type: GraphQLString,
    },
  },
});
