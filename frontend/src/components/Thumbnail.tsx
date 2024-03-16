import Tags from './ui/Tags'

type Props = {
  src: string
  alt: string
  title: string
  username: string
  tags: string[]
}

const Thumbnail = ({ src, alt, username = 'anonymous', title, tags = [] }: Props) => {

  return (
    <figure className='flex flex-col gap-4'>
      <img src={src} alt={alt} className='w-2/3 object-cover rounded-2xl overflow-hidden' />
      <figcaption className='flex flex-col gap-4'>
        <p className='text-white font-semibold'><span className='font-semibold text-twitch-color'>{username}</span>: {title}</p>
        <Tags data={tags} />
      </figcaption>
    </figure>
  )
}

export default Thumbnail
