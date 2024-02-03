import * as net from "net";
console.log("Listening on port :6379");

// Create a new server

const PORT = 6379;
const HOST = "127.0.0.1";

//Set up a tcp server
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    // read message from client
    const message = data.toString();

    // responed with PONG
    socket.write("+OK\r\n");
  });

  //   socket.on("end", () => {
  //     console.log("Client disconnected");
  //   });

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
