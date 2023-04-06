import { API } from '../constants.d'

export function isChannelLive ({ channel }) {
  const options = {
    headers: {
      'Client-ID': API.CLIENT_ID_TWITCH,
      Authorization: `Bearer ${API.TOKEN_TWITCH}`
    }
  }
  const url = new URL(API.URL_STREAMS_TWITCH)
  url.searchParams.set('user_login', channel)
  console.log(`url: ${url}`)
}
