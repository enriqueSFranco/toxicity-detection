// @ts-check
export function twitchConfig ({ channel }) {
  const twitchConfig = {
    identity: {
      username: process.env.BOT_USERNAME,
      password: `oauth:${process.env.ACCESS_TOKEN}`
    },
    channels: [channel]
  }

  return twitchConfig
}