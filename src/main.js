"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
//Set up a tcp server
var server = net.createServer(function (socket) {
    //'connection' listner
    console.log("Client connected..");
    socket.write("you're conected to the server");
    socket.on("data", function (data) {
        console.log("Recived data from client: ".concat(data));
    });
    socket.on("end", function () {
        console.log("Client disconnected");
    });
});
// Listen on port
var PORT = 6379;
server.listen(PORT);
// Handle server errors
server.on("error", function (err) {
    console.log("Server error : ".concat(err));
});
server.on("close", function () {
    console.log("Server closed");
});
function main() {
    console.log("Hello world!!");
}
