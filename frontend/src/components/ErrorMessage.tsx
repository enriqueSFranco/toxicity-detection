const ErrorMessage = () => {
  return (
    <section className='max-sm:w-full w-2/3 h-1/2 grid place-items-center tracking-wide z-10'>
      <div className='bg-red-600/20 p-4 rounded-sm relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:h-full before:rounded-sm before:bg-red-600'>
        <p className='text-white font-semibold text-xl max-sm:font-light max-sm:text-lg tracking-wide'>Algo salió mal, por favor intentalo más tarde.</p>
      </div>
    </section>
  )
}

export default ErrorMessage
