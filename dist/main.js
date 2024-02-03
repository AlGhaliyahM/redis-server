"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
console.log("Listening on port :6379");
// Create a new server
var PORT = 6379;
var HOST = "127.0.0.1";
var input = "$5\r\nAhmed\r\n";
// read the input and split it into array
var reader = input.split("");
// read th byte to determine the data type
var b = reader.shift();
if (b != "$") {
    console.log("Invalid type, expecting bulk strings only");
    process.exit(1);
}
// read the number to determine the number of characters
var size = parseInt(reader.shift() || "0", 10);
if (isNaN(size)) {
    console.log("Invalid size");
    process.exit(1);
}
// remove /r/n
reader.shift();
reader.shift();
var name = reader.splice(0, size).join("");
console.log(name);
//Set up a tcp server
var server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        // read message from client
        var message = data.toString();
        // responed with PONG
        console.log(socket.write("+OK\r\n"));
    });
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
//   socket.on("end", () => {
//     console.log("Client disconnected");
//   });
// const reader = readline.createInterface({
//   input: Buffer.from(input),
// });
// let b = reader.readByte();
// let size = reader.readByte();
// reader.on("line", (line: string) => {
//   // Your logic for processing each line goes here
//   console.log(line);
// });
