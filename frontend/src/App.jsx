import AppLayout from './layout/AppLayout'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App () {
  return (
    <AppLayout>
      <Header />
      <Home />
      <Footer />
    </AppLayout>
  )
}

export default App
