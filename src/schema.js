const { resolve } = require('path');
const { readFile } = require('fs');
const { promisify } = require('util');
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');
const MonsterType = require('./types/Monster');

const asyncReadFile = promisify(readFile);
const DATA_DIR = resolve(__dirname, '..', 'data');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    monster: {
      type: new GraphQLList(MonsterType),
      resolve() {
        return asyncReadFile(
          resolve(DATA_DIR, 'monsters', 'monster_base.json'),
          'utf8'
        ).then(resp => JSON.parse(resp));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
