const { GraphQLObjectType, GraphQLString } = require('graphql');
const { fetchData } = require('../util');
const I18NString = require('./I18NString');
const MonsterReward = require('./MonsterReward');

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

    // associated data
    reward: {
      type: MonsterReward,
      resolve(parent) {
        return fetchData('monsters/monster_rewards.json').then(
          data => data[parent.name.en].rewards
        );
      },
    },
  },
});
