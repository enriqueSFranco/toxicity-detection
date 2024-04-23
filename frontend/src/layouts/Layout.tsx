import Header from '../components/Header'

type Props = {
  children: React.ReactNode
}

function AppLayout ({ children }: Props) {
  return (
    <div className='w-full h-screen flex flex-col items-center p-5'>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
