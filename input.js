let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  } else if (input === '\u0077') {
    connection.write('Move: up');
  }  else if (input === '\u0061') {
    connection.write('Move: left');
  }  else if (input === '\u0073') {
    connection.write('Move: down');
  }  else if (input === '\u0064') {
    connection.write('Move: right');
  }  else if (input === '\u0065') {
    connection.write('Say: Poop');
  } 
};

module.exports = {
  setupInput
};