import { IconTwitch } from './Icon'

const Header = () => {
  return (
    <header className='bg-white h-40 p-4 w-full grid place-content-center'>
      <div className='h-40 flex flex-col justify-center items-center gap-4 relative text-5xl text-primary-blue font-bold font-mono'>
        <h2 className=''>Detectando la toxicidad</h2>
        <h2 className='flex items-center gap-4'>de la comunidad <span className='text-twitch-color'>twitch</span><IconTwitch /></h2>
      </div>
    </header>
  )
}

export default Header
