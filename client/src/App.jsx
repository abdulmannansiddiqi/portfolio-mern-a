import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BackToTop from './components/BackToTop'
import ProgressBar from './components/ProgressBar'
import useReveal from './hooks/useReveal'
import './App.css'

function App() {
  useReveal();

  return (
    <>
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}

export default App