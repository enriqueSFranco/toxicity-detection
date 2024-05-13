import { createServer } from 'node:http';
import express, { json } from 'express';
import { createRouter } from './routes/twitch-channel.js';
import { corsMiddleware } from './middlewares/cors.js';
import { channel } from 'node:diagnostics_channel';

const app = express();
const server = createServer(app)

// const twitchClient = new tmi.Client(twitchConfig({channel}))

app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware());
app.use(express.json());

const PORT = process.env.PORT || 3001;

twitchClient.connect()

app.use('/toxicity-detection', createRouter())

/* ruta para recibir el nombre del canal */
// app.post('/channel', (req, res) => {
//   const { channel } = req.body;
//   const client = new tmi.Client({
//     connection: {
//       options: { debug: true },
//       identity: {
//         username: 'toxicity-detection',
//         password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
//       },
//     },
//     channels: [channel] // Configuramos el canal a escuchar
//   });
//   client.connect();
//   client.on('message', (channel, tags, message, self) => {
//     console.log(message)
//     io.emit('message', { username: tags.username, message, color: tags.color, avatar: tags['user-id'] })
//   })
//   res.status(200).json({ message: `Canal configurado: ${channel}` });
// })

app.use((req, res) => {
  res.status(404).send('not found 404')
})

/* Iniciamos el servidor */
server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})