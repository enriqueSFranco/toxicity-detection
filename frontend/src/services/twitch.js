import tmi from 'tmi.js'

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: 'toxicity-detection',
    password: 'oauth:bxbitggxf9q0s45vvkg83a9wte84kv'
  },
  channels: ['enriquesfranco']
})

function handleMessage (target, context, msg, self) {
  if (self) { return } // Ignorar mensajes del bot

  // Imprimir el mensaje en la consola
  console.log(`${context.username}: ${msg}`)
}

client.connect().then(() => {
  client.on('message', handleMessage)
}).catch(console.error)
