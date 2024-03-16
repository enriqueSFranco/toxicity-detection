type Props = {
  children: React.ReactNode
}

function DetailsLayout ({ children }: Props) {
  return (
    <div className='w-2/3 flex justify-center max-md:flex-col'>
      {children}
    </div>
  )
}

export default DetailsLayout
