import ErrorBoundary from '../components/ErrorBoundary'
import ErrorMessage from '../components/ErrorMessage'
import Form from '../components/Form'
import Message from '../components/Message'
import StreamSection from '../components/ui/StreamSection'

const Home = () => {
  return (
    <main className='w-2/3 h-full flex flex-col items-center'>
      <Form />
      <div className='grid grid-cols-2 mt-9'>
        <ErrorBoundary fallback={<ErrorMessage />}>
          <StreamSection />
        </ErrorBoundary>
        <section className='bg-white/5 w-full h-full overflow-y-auto flex flex-col gap-2 rounded-2xl p-2'>
          <Message
            username="kike sfranco"
            color={"#green-800"}
            message={"hello world"}
            prediction={true}
          />

          <Message
            username="kirito"
            color={"#green-800"}
            message={"hi 👋"}
            prediction={false}
          />
        </section>
      </div>
    </main>
  )
}

export default Home
