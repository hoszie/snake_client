// const connect = require('./play');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect
}