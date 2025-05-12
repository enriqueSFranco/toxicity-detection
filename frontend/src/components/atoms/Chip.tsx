type Props = {
  text: string
}

function Chip ({ text }: Props) {
  return <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">{text}</span>
}

export default Chip
