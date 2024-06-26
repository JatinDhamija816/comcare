import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App