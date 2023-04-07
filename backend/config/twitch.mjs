import tmi from 'tmi.js'

/* Configuramos el cliente de twitch */
export function twitch ({ io }) {
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
      const msg = { user: tags['display-name'], message }
      messages = [...messages, msg]
      io.emit('chat message', msg)
    })
  }).catch(console.error)
}
