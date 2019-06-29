const WriteStream = require('./writable');

function createTerminator() {
  return new WriteStream();
}

module.exports = {createTerminator};
// es2015 default export compatibility
module.exports.default = module.exports;
