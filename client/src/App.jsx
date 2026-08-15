import Loader from './components/Loader'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BackToTop from './components/BackToTop'
import useReveal from './hooks/useReveal'
import './App.css'

function App() {
  useReveal();

  return (
    <>
      <Loader />
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