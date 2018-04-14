const { GraphQLObjectType, GraphQLString } = require('graphql');
const MonsterRewardLevel = require('./MonsterRewardLevel');

module.exports = new GraphQLObjectType({
  name: 'MonsterReward',
  fields: {
    body: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Body Carve'];
      },
    },
  },
});
