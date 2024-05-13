import tmi from 'tmi.js';

export class TwitchController {
  isLive = false

  constructor({ model }) {
    this.model = model
  }

  searchTwitchChannel = async (req, res) => {
    const { twitchChannel } = req.query

    // 1.- Verificar la información que ha enviado el usuario
    if (twitchChannel.trim().length === 0) return res.json({ message: 'El campo es requerido' })

    // 2.- Recuperar el canal de twitch
    const res = await this.model.searchTwitchChannel({ name: twitchChannel })

    res.json(res)
  }

  getMessages = async () => {
    // 3.- Si el canal esta en live creamos el cliente de tmi
    try {
      const twitchClient = new tmi.Client(twitchConfig)

      twitchClient.on('message', (channel, tags, message, self) => {
        if (self || !message.startsWith('!')) return
        const userId = tags['user-id']
        // TODO: Pasar a una funcion para recuperar el color de un usuario
        this.getUserColor(userId)

        console.log(`@${tags.username}: ${message}`)
      })
    } catch (error) {

    }
  }
}