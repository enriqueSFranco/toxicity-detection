import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import http from 'node:http'
import { Server } from 'socket.io'
import { twitch } from './config/twitch.mjs'

dotenv.config()

/* Configuramos el puerto */
const PORT = process.env.PORT || 3000

/* Configuramos el servidor de express */
const app = express()
app.use(cors()) // hacemos uso de las cors, para evitar el error de origen cruzado en el navegador

const httpServer = http.createServer(app)
const io = new Server(httpServer)



app.get('/connect', (req, res) => {
  const { channel } = req.query;

  // Conectarse al canal de Twitch
  twitch({ io, channel });

  res.send(`Conectado al canal ${channel}`);
});

// Iniciar el servidor y escuchar solicitudes
httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
