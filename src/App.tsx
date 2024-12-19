import Header from './components/header'
import Hero from './components/hero'
import Progress from './components/progress'
import Support from './components/support'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className='content-container'>
          <Support />
          <Progress />
        </div>
      </main>
    </>
  )
}

export default App
