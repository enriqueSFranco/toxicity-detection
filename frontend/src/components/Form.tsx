import { useEffect, useRef } from 'react'
import { useTwitchSearchChannel } from '../hooks/useTwitchSearchChannel'
import Loader from './Loader'

function Form () {
  const previusSearch = useRef<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { loading, searchTwitchChannel } = useTwitchSearchChannel()

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current.focus()
    }
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channelName = field.get('channel')

    if (previusSearch.current === channelName || channelName === '') return // verificamos que la busqueda anterior es igual a la actual
    if (channelName instanceof String)
      previusSearch.current = channelName // si la busqueda es diferente a la anterior buscamos el canal
    console.log(channelName)
    searchTwitchChannel({ channelName })
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/3 relative'>
      <div className='flex rounded-md overflow-hidden border border-white/20 bg-black p-2'>
        <input
          className='w-full outline-none text-secondary-gray font-semibold bg-transparent placeholder:text-white/80 placeholder:tracking-[1px] placeholder:font-extralight'
          ref={inputRef}
          type='search'
          autoComplete='off'
          id='channel'
          name='channel'
          placeholder='Buscar canal de twitch'
        />
        <button className='bg-twitch-color p-2 grid place-items-center w-auto hover:rounded-md transition-all duration-300 ease-in-out' aria-label='search twitch channel'>{loading ? <span className='flex items-center gap-3'><Loader />Conectando...</span> : <span className='w-24'>Buscar canal</span>}</button>
      </div>
    </form>

  )
}

export default Form
