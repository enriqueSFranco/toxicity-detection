import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import tmi from 'tmi.js'

dotenv.config()

/* Configuramos el puerto */
const PORT = process.env.PORT || 3001

/* Configuramos el servidor de express */
const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}))

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

/* Configuramos el cliente de Twitch */
const client = new tmi.Client({
  connection: {
    options: { debug: true },
    identity: {
      username: 'toxicity-detection',
      password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
    },
  },
  channels: ['AMOURANTH'] // Reemplaza con el nombre del canal que quieras escuchar
})

client.connect()

client.on('message', (channel, tags, message, self) => {
  console.log(message)
  io.emit('message', { username: tags.username, message, color: tags.color })
})

/* Iniciamos el servidor */
httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})


