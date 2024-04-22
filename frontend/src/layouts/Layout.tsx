import Header from '../components/Header'

type Props = {
  children: React.ReactNode
}

function AppLayout ({ children }: Props) {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between gap-8 p-8'>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
