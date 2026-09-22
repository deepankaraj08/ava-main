import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Landingpage from './pages/LandingPage.jsx'
import About       from './pages/About.jsx'
import Events      from './pages/Events.jsx'
import Gallery     from './pages/Gallery.jsx'
import TeamPage    from './pages/TeamPage.jsx'
import Register    from './pages/Register.jsx'
import EventDetail from './pages/EventDetail.jsx'

// Inner component so it can use hooks that need Router context
function AppInner() {
  const location = useLocation()

  // Stamp the current page on <body> so CSS can apply page-specific offsets
  useEffect(() => {
    document.body.dataset.page = location.pathname === '/' ? 'home' : 'sub'
  }, [location.pathname])

  return (
    <Routes>
      <Route path='/'             element={<Landingpage />} />
      <Route path='/about'        element={<About />} />
      <Route path='/events'       element={<Events />} />
      <Route path='/events/:slug' element={<EventDetail />} />
      <Route path='/gallery'      element={<Gallery />} />
      <Route path='/team'         element={<TeamPage />} />
      <Route path='/register'     element={<Register />} />

      {/* anything else falls back home instead of a blank screen */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

const App = () => (
  <Router>
    <AppInner />
  </Router>
)

export default App


