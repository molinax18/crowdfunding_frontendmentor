import Header from './components/header'
import Hero from './components/hero'
import Support from './components/support'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className='content-container'>
          <Support />
        </div>
      </main>
    </>
  )
}

export default App
