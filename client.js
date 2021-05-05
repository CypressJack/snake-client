const net = require("net");
const { IP, PORT } = require('./constants')
// establishes a connection with the game server
const connect = function () {
  // Creates an object we reference when listening for events
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // Prints a message to us when the client has connected to the server
  conn.on('connect', ()=>{
    console.log("You connected!");
    conn.write('Name: WLC');
  })

  // Log's a message sent from the server
  conn.on('data', (data)=>{
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}