export const API = {
  ENDPOINT_STREAMS_TWITCH: import.meta.env.VITE_URL_STREAMS_TWITCH,
  COHERE_API_KEY: import.meta.env.VITE_COHERE_API_KEY,
  TWITCH_CLIENT_ID: import.meta.env.VITE_TWITCH_CLIENT_ID,
  TWITCH_OAUTH_TOKEN: import.meta.env.VITE_TWITCH_OAUTH_TOKEN,
  ENDPOINT_SEARCH_CHANNEL: import.meta.env.VITE_ENDPOINT_SEARCH_CHANNEL
}

export const PREDICTION = {
  Good: 'good',
  Toxic: 'toxic'
}
