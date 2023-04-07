import express from 'express'

const router = express.Router()

router.get('/channel', (req, res) => {
  const { channel } = req.body

  /* TODO: conectar al canal de twitch como tmi.js */

  res.send(`Conectado al canal ${channel}`)
})
