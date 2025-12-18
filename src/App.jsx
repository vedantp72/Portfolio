import React from 'react'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<AboutPage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
