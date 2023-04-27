import Blob from '../components/Blob'

function AppLayout ({ children }) {
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center relative'>
      <Blob />
      {children}
    </div>
  )
}

export default AppLayout
