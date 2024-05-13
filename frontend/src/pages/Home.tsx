import { useEffect } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import ErrorMessage from '../components/ErrorMessage'
import Form from '../components/Form'
import { StreamDetails } from '../components/ui/stream-thumbnail'
import { StreamMessages } from '../components/ui/stream-messages'


const Home = () => {

  return (
    <main className='w-full flex flex-grow flex-col items-center p-4 mt-8'>
      <Form />
      <div className='w-2/3 max-h-full grid grid-cols-2 gap-10 mt-9'>
        <ErrorBoundary fallback={<ErrorMessage />}>
          <StreamDetails />
        </ErrorBoundary>
        <StreamMessages />
      </div>
    </main >
  )
}

export default Home
