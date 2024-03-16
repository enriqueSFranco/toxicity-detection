import ErrorBoundary from '../components/ErrorBoundary'
import ErrorMessage from '../components/ErrorMessage'
import Form from '../components/Form'
import StreamSection from '../components/ui/StreamSection'

const Home = () => {
  return (
    <main className='w-full h-full flex flex-col items-center gap-12 mt-12'>
      <Form />
      <ErrorBoundary fallback={<ErrorMessage />}>
        <StreamSection />
      </ErrorBoundary>
    </main>
  )
}

export default Home
