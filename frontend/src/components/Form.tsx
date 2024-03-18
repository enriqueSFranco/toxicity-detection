import { useEffect, useRef } from 'react'
import { useChannel } from '../hooks/useChannel'
import Loader from './Loader'

function Form () {
  const previusSearch = useRef(null)
  const inputRef = useRef(null)
  const { loading, checkChannel } = useChannel()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channel = field.get('channel')

    if (previusSearch.current === channel || channel === '') return // verificamos que la busqueda anterior es igual a la actual

    previusSearch.current = channel // si la busqueda es diferente a la anterior buscamos el canal

    checkChannel(channel)
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2 relative'>
      <div className='flex rounded-md overflow-hidden border border-white/35 bg-black p-2'>
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
