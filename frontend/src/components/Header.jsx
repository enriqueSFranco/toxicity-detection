import { IconTwitch } from './Icon'

const Header = () => {
  return (
    <header className='bg-primary-blue h-32 w-full flex justify-center items-center gap-4'>
      <h1 className='text-3xl text-secondary-gray font-bold'>Detectando la toxicidad de la comunidad twitch</h1>
      <IconTwitch />
    </header>
  )
}

export default Header
