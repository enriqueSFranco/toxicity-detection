function DetailsLayout ({ children }) {
  return (
    <div className='max-sm:flex-col w-full h-full flex justify-between gap-10 max-sm:gap-0 z-10'>
      {children}
    </div>
  )
}

export default DetailsLayout
