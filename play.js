
/**
 * Establishes connection with the game server
 */

  // interpret incoming data as text
  

const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
}
setupInput();
// module.exports = connect;
