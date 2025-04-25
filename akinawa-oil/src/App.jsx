import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'
import Navbar from './components/Navbar'

function App() {

  return (
    <>

      <Navbar />
    <main className="pt-20"> 

      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
