import Tags from './organisms/Tags'

type Props = {
  src: string
  alt: string
  title: string
  username: string
  tags: string[]
}

const Thumbnail = ({ src, alt, username = 'anonymous', title, tags = [] }: Props) => {

  return (
    <figure className='relative flex flex-col gap-5'>
      <img src={src} alt={alt} className='w-full object-cover aspect-video rounded-2xl overflow-hidden shadow-twitch-color shadow-md opacity-75' />
      <figcaption className='flex flex-col gap-4'>
        <p className='text-white font-semibold'><span className='font-semibold text-twitch-color'>{username}</span>: {title}</p>
        <Tags data={tags} />
      </figcaption>
    </figure>
  )
}

export default Thumbnail
