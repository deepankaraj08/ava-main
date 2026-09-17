import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ROUTES = ['/', '/about', '/events', '/gallery', '/team', '/register']

export function useSwipeNavigation() {
  const navigate     = useNavigate()
  const location     = useLocation()

  // Always-current refs — no stale closure issues
  const pathnameRef  = useRef(location.pathname)
  const cooldownRef  = useRef(false)
  const touchRef     = useRef(null)
  const firedRef     = useRef(false)

  // Keep pathnameRef in sync on every render
  pathnameRef.current = location.pathname

  useEffect(() => {
    const goTo = (direction) => {
      if (cooldownRef.current || firedRef.current) return
      const path = pathnameRef.current
      const idx  = ROUTES.indexOf(path)
      if (idx === -1) return
      const next = direction === 'next' ? idx + 1 : idx - 1
      if (next < 0 || next >= ROUTES.length) return
      firedRef.current    = true
      cooldownRef.current = true
      navigate(ROUTES[next])
      window.scrollTo({ top: 0, behavior: 'instant' })
      setTimeout(() => { cooldownRef.current = false }, 800)  // short cooldown
    }

    // ── SCROLL listener — works for all scrollable pages ─────────────────────
    const onScroll = () => {
      const path = pathnameRef.current
      if (path === '/') return   // home page can't scroll, skip

      const fromBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight

      if (fromBottom <= 5)  goTo('next')
      if (window.scrollY <= 0) {
        // at very top — but don't go prev (let them read from top)
      }
    }

    // ── TOUCH listeners — catches home page (non-scrollable) ─────────────────
    const onTouchStart = (e) => {
      firedRef.current = false
      const t = e.touches[0]
      touchRef.current = { x: t.clientX, y: t.clientY }
    }

    const onTouchEnd = (e) => {
      if (!touchRef.current) return
      const { x: sx, y: sy } = touchRef.current
      touchRef.current = null

      const t   = e.changedTouches[0]
      const dx  = t.clientX - sx
      const dy  = t.clientY - sy

      // Must be clearly vertical and long enough
      if (Math.abs(dy) < 40) return
      if (Math.abs(dx) > Math.abs(dy)) return   // horizontal dominant — ignore

      const path = pathnameRef.current

      if (dy < 0) {
        // Finger moved UP = scroll down = go to NEXT page
        if (path === '/') {
          // Home page — always trigger on upward swipe
          goTo('next')
        } else {
          // Other pages — only if at the bottom
          const fromBottom =
            document.documentElement.scrollHeight - window.scrollY - window.innerHeight
          if (fromBottom <= 30) goTo('next')
        }
      } else {
        // Finger moved DOWN = scroll up = go to PREVIOUS page
        if (path === '/') {
          goTo('prev')
        } else {
          if (window.scrollY <= 30) goTo('prev')
        }
      }
    }

    window.addEventListener('scroll',      onScroll,     { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend',   onTouchEnd,   { passive: true })

    return () => {
      window.removeEventListener('scroll',      onScroll)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend',   onTouchEnd)
    }
  }, [navigate])   // ← only navigate in deps, pathname is read via ref
}
