
/**
 * Establishes connection with the game server
 */

  // interpret incoming data as text
  

const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');
connect();


setupInput();
// module.exports = connect;
