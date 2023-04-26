export const API = {
  URL_STREAMS_TWITCH: import.meta.env.VITE_URL_STREAMS_TWITCH,
  COHERE_API_KEY: import.meta.env.VITE_COHERE_API_KEY,
  CLIENT_ID_TWITCH: import.meta.env.VITE_CLIENT_ID_TWITCH,
  TOKEN_TWITCH: import.meta.env.VITE_ACCESS_TOKEN
}

export const PREDICTION = {
  Toxic: 'Toxic',
  Benign: 'Benign'
}
