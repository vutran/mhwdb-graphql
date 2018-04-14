const { readFile } = require('fs');
const { promisify } = require('util');
const { join } = require('path');
const { DATA_DIR } = require('./constants');

const asyncReadFile = promisify(readFile);

function fetchData(data) {
  return asyncReadFile(join(DATA_DIR, data)).then(resp => JSON.parse(resp));
}

module.exports = {
  fetchData,
};
