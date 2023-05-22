import ErrorBoundary from '../components/ErrorBoundary'
import ErrorMessage from '../components/ErrorMessage'
import Form from '../components/Form'
import StreamSection from './StreamSection'

const Home = () => {
  return (
    <main className='max-sm:w-full container w-2/3 h-full flex flex-col items-center gap-4'>
      <Form />
      <ErrorBoundary fallback={<ErrorMessage />}>
        <StreamSection />
      </ErrorBoundary>
    </main>
  )
}

export default Home
