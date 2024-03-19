import ErrorBoundary from '../components/ErrorBoundary'
import ErrorMessage from '../components/ErrorMessage'
import Form from '../components/Form'
import { StreamMessages } from '../components/ui/StreamMessages'
import { StreamDetails } from '../components/ui/StreamDetails'
import { useTwitchSearchChannel } from '../hooks'

const Home = () => {
  return (
    <main className='w-2/3 h-full flex flex-col items-center'>
      <Form />
      <div className='grid grid-cols-2 mt-9'>
        <ErrorBoundary fallback={<ErrorMessage />}>
          <StreamDetails />
        </ErrorBoundary>
        <StreamMessages />
      </div>
    </main >
  )
}

export default Home
