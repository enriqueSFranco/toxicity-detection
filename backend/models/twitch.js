import { twitchConfig } from "../config/twitch"

export class TwitchModel {
  async searchTwitchChannel ({ name }) {
    try {
      const url = new URL(process.env.URL_SEARCH_CHANNEL)
      url.searchParams.set('query', name)
      url.searchParams.set('live_only', true)

      const channelRes = await fetch(url)

      if (!res.ok) {
        const error = {
          err: 'Opps, ha ocurrido un error durante la peticion',
          status: res.status || '00',
          statusText: res.statusText || 'Opps, ha ocurrido un error durante la peticion'
        }
        throw error
      }

      const json = await channelRes.json()
      const jsonMapped = [json].map(({ is_live, display_name, game_name, tags, thumbnail_url, title }) => ({
        gameName: game_name,
        name: display_name,
        isLive: is_live,
        tags,
        thumbnail: thumbnail_url,
        title
      }))

      return jsonMapped
    } catch (e) { }
  }

  async broadcastingLive ({ isLive }) {

  }
}