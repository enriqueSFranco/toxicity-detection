function MainLayout ({ children }) {
  return (
    <main className='h-full flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold text-purple-500 h-16'>Detección de mensajes tóxicos</h1>
      <section className='flex justify-between gap-4 w-full h-full'>
        {children}
      </section>
    </main>
  )
}

export default MainLayout
