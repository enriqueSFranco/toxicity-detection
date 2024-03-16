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
    <figure className='flex flex-col gap-6'>
      <div className='h-full  overflow-hidden rounded-sm'>
        <img src={src} alt={alt} className='w-full aspect-video' />
      </div>
      <figcaption className='flex flex-col gap-4'>
        <p className='text-white font-semibold'><span className='font-semibold text-twitch-color'>{username}</span>: {title}</p>
        <Tags data={tags} />
      </figcaption>
    </figure>
  )
}

export default Thumbnail
