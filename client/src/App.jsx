import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import useReveal from './hooks/useReveal'
import './App.css'

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App