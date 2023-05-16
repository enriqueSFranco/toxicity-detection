import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import tmi from 'tmi.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

/* Inicializar el cliente tmi.js fuera del controlador de la ruta */
const client = new tmi.Client({
  connection: {
    options: { debug: true },
    identity: {
      username: 'toxicity-detection',
      password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
    },
  },
});

let isClientConnected = false;

client.on('connected', () => {
  isClientConnected = true;
});

client.on('disconnected', () => {
  isClientConnected = false;
});

client.on('message', (channel, tags, message, self) => {
  if (!self) {
    console.log(message);
    io.emit('message', { username: tags.username, message, color: tags.color, avatar: tags['user-id'] });
  }
});

/* Ruta para recibir el nombre del canal */
app.post('/channel', (req, res) => {
  const { channel } = req.body;

  // Desconectar cliente existente antes de conectar otro
  if (isClientConnected) {
    client.disconnect();
  }

  client.channels = [channel]; // Configurar el canal a escuchar
  client.connect();

  res.status(200).send(`Canal configurado: ${channel}`);
});

/* Iniciamos el servidor */
httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
