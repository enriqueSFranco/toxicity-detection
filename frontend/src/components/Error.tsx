import { IconFace } from './Icon'

const Error = ({ error }) => {
  return (
    <section className='w-full h-full text-secondary-gray p-4 flex flex-col items-center justify-center gap-4'>
      <p className='text-2xl'>{error}</p>
      <IconFace />
    </section>
  )
}
export default Error
