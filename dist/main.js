"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
console.log("Listening on port :6379");
// Create a new server
var PORT = 6379;
var HOST = "127.0.0.1";
//Set up a tcp server
var server = net.createServer(function (socket) {
  socket.on("data", function (data) {
    // read message from client
    var message = data.toString();
    // responed with PONG
    socket.write("+OK\r\n");
  });
  //   socket.on("end", () => {
  //     console.log("Client disconnected");
  //   });
  // Handle server errors
  server.on("error", function (err) {
    console.log("Server error : ".concat(err.message));
    // process.exit(1);
  });
  server.on("close", function () {
    console.log("Server closed");
  });
});
// Listen on port 6379
server.listen(PORT, HOST, function () {
  console.log("Server listening on ".concat(HOST, ":").concat(PORT));
});
