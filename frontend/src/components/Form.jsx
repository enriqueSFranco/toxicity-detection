import { useEffect, useRef } from 'react'
import { useChannel } from '../hooks/useChannel'
import Loader from './Loader'

function Form () {
  const previusSearch = useRef(null)
  const inputRef = useRef(null)
  const { loading, handleCheckLiveChannel } = useChannel()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channel = field.get('channel')

    if (previusSearch.current === channel || channel === '') return // verificamos que la busqueda anterior es igual a la actual

    previusSearch.current = channel // si la busqueda es diferente a la anterior buscamos el canal

    console.log(previusSearch.current, channel)
    // si esta el canal esta en directo
    handleCheckLiveChannel(channel)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex bg-secondary-gray w-full rounded-sm overflow-hidden'>
        <input
          className='w-full outline-none text-purple-500 font-semibold p-3'
          ref={inputRef}
          type='search'
          autoComplete='off'
          id='channel'
          name='channel'
          placeholder='Buscar canal de twitch'
        />
        <button className='bg-purple-500 p-2 grid place-items-center w-auto'>{loading ? <span className='flex items-center gap-3'><Loader />Conectando...</span> : <span className='w-24'>Buscar canal</span>}</button>
      </div>
    </form>

  )
}

export default Form
