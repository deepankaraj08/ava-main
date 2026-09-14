import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landingpage from './pages/LandingPage.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Gallery from './pages/Gallery.jsx'
import TeamPage from './pages/TeamPage.jsx'
import Register from './pages/Register.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/register' element={<Register />} />

        {/* anything else falls back home instead of a blank screen */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  )
}

export default App
