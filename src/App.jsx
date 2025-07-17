import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/carousel.css'
import './styles/info.css'
import './styles/responsive.css'

import Header from './components/header'
import Hero from './components/hero'
import Info from './components/info'
import Carrossel from './components/carrossel'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Carrossel />
        <Info />
      </main>
    </>
  )
}

export default App
