const { GraphQLObjectType, GraphQLString } = require('graphql');
const MonsterRewardLevel = require('./MonsterRewardLevel');

module.exports = new GraphQLObjectType({
  name: 'MonsterReward',
  fields: {
    bodyCarve: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Body Carve'];
      },
    },
    questReward: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Quest Reward'];
      },
    },
    hornCarve: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Horn Carve'];
      },
    },
    tailCarve: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Tail Carve'];
      },
    },
    headShellCarve: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Head Shell Carve'];
      },
    },
    shinyDrop: {
      type: MonsterRewardLevel,
      resolve(parent) {
        return parent['Shiny Drop'];
      },
    },
  },
});
