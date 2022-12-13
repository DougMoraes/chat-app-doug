import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";

const app = express();
const httpAux = new http.Server(app)
const socketIO = new Server(httpAux, { cors: { origin: "<http://localhost:3000>" } });
const PORT = 4000;

app.use(cors());

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('🔥: A user disconnected');
  });
})

app.get("/api", (req, res) => {
  res.json({
    message: 'Hello world',
  })
});

httpAux.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
