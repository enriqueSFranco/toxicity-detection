import { API } from '../constants.d'

export async function isChannelLive ({ channel }) {
  try {
    const options = {
      headers: {
        'Client-ID': API.CLIENT_ID_TWITCH,
        Authorization: `Bearer ${API.TOKEN_TWITCH}`
      }
    }
    const url = `https://api.twitch.tv/helix/streams?user_login=${channel}`

    const response = await fetch(url, options)

    if (!response.ok) {
      const error = {
        err: new Error('Opps, ha ocurrido un error durante la peticion'),
        status: response.status || '00',
        statusText: response.statusText || 'Opps, ha ocurrido un error'
      }
      throw error
    }
    const json = await response.json()
    return json
  } catch (error) {
    if (error.status === 400) {
      throw new Error(`El canal ${channel} no existe`)
    }
  }
}
