import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Landingpage from './pages/LandingPage.jsx'
import About       from './pages/About.jsx'
import Events      from './pages/Events.jsx'
import Gallery     from './pages/Gallery.jsx'
import TeamPage    from './pages/TeamPage.jsx'
import Register    from './pages/Register.jsx'
import { useSwipeNavigation } from './hooks/useSwipeNavigation.js'

// Page order — must match ROUTES in useSwipeNavigation.js
const ROUTES = ['/', '/about', '/events', '/gallery', '/team', '/register']
const LABELS = ['Home', 'About', 'Events', 'Gallery', 'Team', 'Register']

// Inner component so it can use hooks that need Router context
function AppInner() {
  useSwipeNavigation()   // 🔥 attaches swipe listeners (mobile only)

  const location    = useLocation()
  const activeIndex = ROUTES.indexOf(location.pathname)

  return (
    <>
      <Routes>
        <Route path='/'         element={<Landingpage />} />
        <Route path='/about'    element={<About />} />
        <Route path='/events'   element={<Events />} />
        <Route path='/gallery'  element={<Gallery />} />
        <Route path='/team'     element={<TeamPage />} />
        <Route path='/register' element={<Register />} />

        {/* anything else falls back home instead of a blank screen */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      {/* ── Swipe Page Indicator — mobile only, shown via CSS ── */}
      <div className='swipe-indicator' aria-hidden='true'>
        <div className='swipe-indicator__dots'>
          {ROUTES.map((_, i) => (
            <span
              key={i}
              className={`swipe-indicator__dot${i === activeIndex ? ' swipe-indicator__dot--active' : ''}`}
            />
          ))}
        </div>
        <p className='swipe-indicator__label'>
          {activeIndex >= 0 ? LABELS[activeIndex] : ''}
        </p>
      </div>
    </>
  )
}

const App = () => (
  <Router>
    <AppInner />
  </Router>
)

export default App
