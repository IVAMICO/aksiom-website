import { useEffect } from 'react'

const SITE_NAME = 'Aksiom'
const SITE_URL = 'https://aksiom.ai'

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets per-page title, description, canonical URL and social meta tags.
 * Pages sharing one static index.html otherwise all show the same
 * description/canonical to crawlers and link previews.
 */
export function useSEO({ title, description, path = '/', noindex = false } = {}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    if (title) {
      const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
      document.title = fullTitle
      setMeta('property', 'og:title', fullTitle)
      setMeta('name', 'twitter:title', fullTitle)
    }

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setMeta('property', 'og:url', url)
    setCanonical(url)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, noindex])
}
