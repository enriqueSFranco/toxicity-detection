import express from 'express'
import cors from 'cors'
import http from 'node:http'
import { Server } from 'socket.io'
import tmi from 'tmi.js'

/* Configuramos el servidor de express */
const app = express()
app.use(cors())
const httpServer = http.createServer(app)
const io = new Server(httpServer)

/* Configuramos el cliente de twitch */
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: 'toxicity-detection',
    password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
  },
  channels: ['enriquesfranco']
})

/* Iniciamos el cliente de twitch */
let messages = []
client.connect().then(() => {
  client.on('message', (channel, tags, message, self) => {
    const msg = { user: tags['display-name'], message: message }
    messages = [...messages, msg]
    io.emit('chat message', msg)
  })
}).catch(console.error)


// Iniciar el servidor y escuchar solicitudes
httpServer.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001')
})