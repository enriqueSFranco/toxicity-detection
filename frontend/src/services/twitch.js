import { API } from '../constants.d'

export async function isChannelLive ({ channel }) {
  try {
    const options = {
      headers: {
        'Client-ID': API.CLIENT_ID_TWITCH,
        Authorization: `Bearer ${API.TOKEN_TWITCH}`
      }
    }
    const url = new URL(API.URL_STREAMS_TWITCH)
    url.searchParams.set('user_login', channel)
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

    if (json.data.length === 0) {
      throw new Error(`El canal ${channel} no está en directo`)
    }
    return json
  } catch (error) {
    if (error.status === 400) {
      throw new Error(`El canal ${channel} no existe`)
    } else {
      throw error
    }
  }
}

export async function getMessagesTwitchChannel (channel) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ channel })
    }

    const response = await fetch(`${API.URL_CHANNEL_TWITCH}`, options)
    console.log(API.URL_CHANNEL_TWITCH)

    if (!response.ok) {
      const error = {
        err: new Error('Opps, ha ocurrido un error durante la peticion'),
        status: response.status || '00',
        statusText: response.statusText || 'Opps, ha ocurrido un error'
      }
      throw error
    }
    const json = await response.text()
    console.log(json)
    return json
  } catch (error) {
    if (error.status === 400) {
      throw new Error(`El canal ${channel} no existe`)
    } else {
      throw error
    }
  }
}
