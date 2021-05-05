const {connect} = require("./client")

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  }
};


console.log("Connecting ...");
setupInput();
stdin.on("data", handleUserInput);
connect();
