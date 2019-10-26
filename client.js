const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  })

  conn.on('connect', () => {   ///sending a name/snake initials
    conn.write('Name: NPH');
  });

  // conn.on('connect', () => {
  //   conn.write("Move: down");
  // });

  return conn;
}
module.exports = {
  connect
}