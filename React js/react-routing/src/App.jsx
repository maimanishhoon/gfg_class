import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './component /Home'
import About from './component /About'
import ContactUs from './component /ContactUs'
import Login from './component /Login'
import React from 'react'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App