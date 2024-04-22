import { createContext } from "react"

type ContextType = {}

export const TwitchChannelMessagesContext = createContext<ContextType | undefined>(undefined)

type Props = {
  children: React.ReactNode
}
export function TwitchChannelMessagesProvider ({ children }: Props) {

  const data = {}

  return (
    <TwitchChannelMessagesContext.Provider value={data}>
      {children}
    </TwitchChannelMessagesContext.Provider>
  )
}