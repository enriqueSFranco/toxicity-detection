import { API } from '../shared/constants.d'
import { Token, TwitchChannel } from '../shared/types.d'

const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, ENDPOINT_SEARCH_CHANNEL } = API

// function buildStreamURL (channel: string) {
//   const url = new URL(API.URL_STREAMS_TWITCH)
//   url.searchParams.set('user_login', channel)
//   return url
// }


const getAccessToken = async (): Promise<Token> => {
  const options: RequestInit = {
    method: "POST"
  }
  const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&code=i1xair1gknx7vlyb5ub76ishr4zd4j&grant_type=client_credentials`, options)

  if (!tokenResponse.ok) {
    const error = {
      err: new Error('Opps, ha ocurrido un error durante la peticion'),
      status: tokenResponse.status || '00',
      statusText: tokenResponse.statusText || 'Opps, ha ocurrido un error'
    }
    throw error
  }

  const tokenJson: Token = await tokenResponse.json()

  return tokenJson
}

export const searchChannel = async ({ channelName }: { channelName: string }) => {
  const token = (await getAccessToken()).access_token
  const options: RequestInit = {
    headers: {
      "authorization": `Bearer ${token}`,
      "client-id": `${TWITCH_CLIENT_ID}`,
    }
  }

  const url = new URL(ENDPOINT_SEARCH_CHANNEL)
  url.searchParams.set("query", channelName)

  const channelResponse = await fetch(`${url}`, options)

  if (!channelResponse.ok) {
    const error = {
      err: new Error('Opps, ha ocurrido un error durante la peticion'),
      status: channelResponse.status || '00',
      statusText: channelResponse.statusText || 'Opps, ha ocurrido un error'
    }
    throw error
  }

  const channelJson: TwitchChannel = await channelResponse.json()
  console.log("channelResponse", channelJson)

  // const mappedChannelJson = channelJson.data.map(it => ({
  //   broadcasterLanguage: it.broadcaster_language,
  //   broadcasterLogin: it.broadcaster_login,
  //   displayName: it.display_name,
  //   gameId: it.game_id,
  //   gameName: it.game_name,
  //   id: it.id,
  //   isLive: it.is_live,
  //   tagIds: it.tag_ids,
  //   tags: it.tags,
  //   thumbnailURL: it.thumbnail_url,
  //   title: it.title,
  //   startedAt: it.started_at
  // }))

  return channelJson
}
