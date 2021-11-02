import { useState, useEffect } from 'react'

export default (element, rootMargin) => {
  const [inViewport, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting)
        }
      },
      {
        rootMargin,
      }
    )

    element.current && observer.observe(element.current)
  }, [])

  return inViewport
}
