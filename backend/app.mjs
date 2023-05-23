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

/* ruta para recibir el nombre del canal */
app.post('/channel', (req, res) => {
  const { channel } = req.body;
  const client = new tmi.Client({
    connection: {
      options: { debug: true },
      identity: {
        username: 'toxicity-detection',
        password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
      },
    },
    channels: [channel] // Configuramos el canal a escuchar
  });
  client.connect();
  client.on('message', (channel, tags, message, self) => {
    console.log(message)
    io.emit('message', { username: tags.username, message, color: tags.color, avatar: tags['user-id'] })
  })
  res.status(200).json({ message: `Canal configurado: ${channel}` });
})


/* Iniciamos el servidor */
httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})