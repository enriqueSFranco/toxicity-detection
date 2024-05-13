type Props = {
  text: string
}

function Chip ({ text }: Props) {
  return <span className="inline-block bg-indigo-100 text-twitch-color text-xs font-medium px-2.5 py-1 rounded dark:bg-twitch-color/20 dark:text-twitch-color">{text}</span>
}

export default Chip
