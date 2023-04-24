import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import tmi from 'tmi.js';

dotenv.config();

/* Configuramos el puerto */
const PORT = process.env.PORT || 3001;

/* Configuramos el servidor de express */
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Cambia la URL por la de tu aplicación de React
  methods: ['GET', 'POST'],
  credentials: true
}));

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

/* Configuramos el cliente de Twitch */
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['MoureDev'] // Reemplaza con el nombre del canal que quieras escuchar
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  io.emit('message', { username: tags.username, message, color: tags.color }); // Emitimos el evento 'message' a todos los clientes conectados
});

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});


/* Iniciamos el servidor */
httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});


