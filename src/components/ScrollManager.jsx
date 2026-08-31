import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't reset scroll position on navigation by default —
// without this, clicking a nav link just leaves you wherever you last
// scrolled on the previous page. On a hash (e.g. /pricing#volume-discount),
// scroll to that section instead; otherwise jump to the top.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Wait a frame so the new page's DOM (and the target element) exists.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
