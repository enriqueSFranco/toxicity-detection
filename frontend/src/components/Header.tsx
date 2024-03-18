import { IconTwitch } from './Icon'

const Header = () => {
  return (
    <header className='w-2/3 text-xl flex flex-col items-start tracking-[1px] font-extralight'>
      <div className='flex gap-4'>
        <h2 className='text-balance font-bold text-4xl'>Detectando la toxicidad de la comunidad <span className='text-twitch-color capitalize'>twitch</span></h2>
        <IconTwitch width={60} height={60} />
      </div>
      <p className='text-balance text-base text-white/80'> Herramienta de detección de mensajes tóxicos, podemos detectar automáticamente y destacar mensajes que contengan lenguaje ofensivo o inapropiado.</p>
    </header>
  )
}

export default Header
