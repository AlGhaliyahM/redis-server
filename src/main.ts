import * as net from "net";
import * as readline from "readline";

console.log("Listening on port :6379");

// Create a new server
const PORT = 6379;
const HOST = "127.0.0.1";

const input: string = "$5\r\nAhmed\r\n";

// read the input and split it into array
const reader = input.split("");

// read th byte to determine the data type
const b = reader.shift();

if (b != "$") {
  console.log("Invalid type, expecting bulk strings only");
  process.exit(1);
}

// read the number to determine the number of characters
const size = parseInt(reader.shift() || "0", 10);
if (isNaN(size)) {
  console.log("Invalid size");
  process.exit(1);
}

// remove /r/n
reader.shift();
reader.shift();

const name = reader.splice(0, size).join("");
console.log(name);

//Set up a tcp server
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    // read message from client
    const message = data.toString();

    // responed with PONG
    console.log(socket.write("+OK\r\n"));
  });

  // Handle server errors
  server.on("error", (err) => {
    console.log(`Server error : ${err.message}`);
    // process.exit(1);
  });

  server.on("close", () => {
    console.log("Server closed");
  });
});

// Listen on port 6379
server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
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
