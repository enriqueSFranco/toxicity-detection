import { Router } from "express";
import tmi from 'tmi.js';

const router = Router()

twitchClient.connect()

export function createRouter () {
  router.get('/:twitch-channel', (req, res) => {
    // TODO: recuperar mensajes de un canal
    const { twitchChannel } = req.body

    // verificar la data
    if (twitchChannel.trim().length === 0) {
      // manejar el error si el campo esta vacio
    }

    const twitchClient = new tmi.Client(twitchConfig)

    twitchClient.on('message', (channel, tags, message, self) => {
      if (self || !message.startsWith('!')) return
      console.log(`@${tags.username}: ${message}`)
    })
  })
  return router
}
