import { IconTwitch } from './Icon'

const Header = () => {
  return (
    <header className='h-40 p-4 w-full grid place-content-center'>
      <div className='h-40 flex flex-col justify-center items-center relative text-2xl max-sm:text-xl max-sm:font-light text-white font-bold'>
        <h2>Detectando la toxicidad</h2>
        <h2 className='flex items-center gap-4'>de la comunidad <span className='text-twitch-color'>twitch</span><IconTwitch /></h2>
      </div>
    </header>
  )
}

export default Header
