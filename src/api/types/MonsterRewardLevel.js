const { GraphQLObjectType, GraphQLList } = require('graphql');
const Reward = require('./Reward');

module.exports = new GraphQLObjectType({
  name: 'MonsterRewardLevel',
  fields: {
    lr: {
      type: new GraphQLList(Reward),
    },
    hr: {
      type: new GraphQLList(Reward),
    },
  },
});
