import { create } from 'zustand'
import { isChannelLive, getMessagesTwitchChannel } from '../services/twitch'

export const useChannelStore = create((set) => ({
  loading: false,
  liveChannel: [],
  messagesChannel: [],
  error: null,
  fetchData: async (channel) => {
    try {
      set({ loading: true })
      const [liveChannel, messagesChannel] = await Promise.all([isChannelLive({ channel }), getMessagesTwitchChannel(channel)])
      set({ liveChannel, messagesChannel, error: null })
    } catch (error) {
      set({ error })
    } finally {
      set({ loading: false })
    }
  }
}))
