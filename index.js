const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const socket = require("./socket");

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

io.sockets.on("connection", socket);

server.listen(3001, () =>
  console.log(`Socket Chat is running on http://localhost:3001`)
);
