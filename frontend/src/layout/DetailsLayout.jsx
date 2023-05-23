function DetailsLayout ({ children }) {
  return (
    <div className='max-sm:flex-col w-full h-full flex justify-between gap-10 z-10'>
      {children}
    </div>
  )
}

export default DetailsLayout
