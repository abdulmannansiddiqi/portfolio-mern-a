import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import useReveal from './hooks/useReveal'
import './App.css'

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App