const express = require("express");
const app = express();
const socketIo = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
