import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";

type chatType = {
  id: string,
  roomName: string,
  messages: string[],
};

const app = express();
const httpAux = new http.Server(app)
const socketIO = new Server(httpAux, { cors: { origin: "<http://localhost:3000>" } });
const PORT = 4000;

app.use(cors());

const generateID = () => Math.random().toString(36).substring(2, 10);
let chatRooms: chatType[] = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("createRoom", (roomName) => {
    socket.join(roomName);

    chatRooms.unshift({ id: generateID(), roomName, messages: [] });
    socket.emit("roomList", chatRooms);
  });

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('🔥: A user disconnected');
  });
})

app.get("/api", (req, res) => {
  res.json(chatRooms);
});

httpAux.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
