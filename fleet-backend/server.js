const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const eventRoutes = require("./routes/eventRoutes");
const startEventGenerator = require("./services/eventGenerator");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

app.use("/api", eventRoutes);

io.on("connection", (socket) => {
  console.log("Client connected");
});

startEventGenerator(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
