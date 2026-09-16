import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Ordered list of routes — swipe navigates through these in sequence
const ROUTES = ['/', '/about', '/events', '/gallery', '/team', '/register']

const MIN_SWIPE_DISTANCE = 60   // px — minimum finger travel to count as a swipe
const MAX_SWIPE_TIME     = 500  // ms — swipe must complete within this window
const SCROLL_EDGE_BUFFER = 40   // px — how close to top/bottom to allow vertical swipe nav

export function useSwipeNavigation() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const touchRef  = useRef(null)

  useEffect(() => {
    // ── Only activate on phone/tablet (≤ 768 px wide) ──────────────────────
    const isMobile = () => window.innerWidth <= 768

    const handleTouchStart = (e) => {
      if (!isMobile()) return
      const t = e.touches[0]
      touchRef.current = {
        startX:    t.clientX,
        startY:    t.clientY,
        startTime: Date.now(),
      }
    }

    const handleTouchEnd = (e) => {
      if (!isMobile() || !touchRef.current) return

      const { startX, startY, startTime } = touchRef.current
      touchRef.current = null

      const t        = e.changedTouches[0]
      const dx       = t.clientX - startX   // positive = swiped right
      const dy       = t.clientY - startY   // positive = swiped down
      const elapsed  = Date.now() - startTime
      const absDx    = Math.abs(dx)
      const absDy    = Math.abs(dy)

      if (elapsed > MAX_SWIPE_TIME) return   // too slow → ignore

      const currentIndex = ROUTES.indexOf(location.pathname)
      if (currentIndex === -1) return

      let direction = null   // 'next' | 'prev'

      // ── Horizontal swipe (takes priority if dominant axis) ─────────────────
      if (absDx > absDy && absDx >= MIN_SWIPE_DISTANCE) {
        direction = dx < 0 ? 'next' : 'prev'   // left = next, right = prev
      }

      // ── Vertical swipe (only when at scroll edge) ──────────────────────────
      if (absDy > absDx && absDy >= MIN_SWIPE_DISTANCE) {
        const scrollTop    = window.scrollY || document.documentElement.scrollTop
        const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - scrollTop

        if (dy < 0 && scrollTop <= SCROLL_EDGE_BUFFER) {
          // Swiped UP (finger moved up) while at the top → go to previous page
          direction = 'prev'
        } else if (dy > 0 && scrollBottom <= SCROLL_EDGE_BUFFER) {
          // Swiped DOWN (finger moved down) while at the bottom → go to next page
          direction = 'next'
        }
      }

      if (!direction) return

      const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
      if (nextIndex >= 0 && nextIndex < ROUTES.length) {
        navigate(ROUTES[nextIndex])
        // Scroll new page to top immediately
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend',   handleTouchEnd,   { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend',   handleTouchEnd)
    }
  }, [navigate, location.pathname])
}
