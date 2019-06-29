const {Writable} = require('stream');

class WriteStream extends Writable {
  constructor() {
    super({objectMode: true});
  }

  _write(chunk, encoding, cb) {
    setImmediate(cb);
  }
}

module.exports = WriteStream;
