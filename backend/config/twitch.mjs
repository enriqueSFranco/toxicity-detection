import tmi from 'tmi.js'

/* Configuramos el cliente de twitch */
export function twitch ({ io, channel }) {
  const client = new tmi.Client({
    options: { debug: true },
    identity: {
      username: 'toxicity-detection',
      password: process.env.PASS_TWITCH
    },
    channels: [channel] // nombre del canal de twitch
  })

  /* Iniciamos el cliente de twitch */
  let messages = []
  client.connect().then(() => {
    client.on('message', (tags, message) => {
      const msg = { user: tags['display-name'], message }
      messages = [...messages, msg]
      io.emit('chat message', msg)
    })
  }).catch(console.error)
}
