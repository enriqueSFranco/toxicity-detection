import Form from '../components/Form'
import StreamSection from './StreamSection'

const Home = () => {
  return (
    <main className='container w-2/3 h-full flex flex-col items-center gap-4'>
      <Form />
      <StreamSection />
    </main>
  )
}

export default Home
