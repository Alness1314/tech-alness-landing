import { useEffect, useState } from 'react'

export function useReveal() {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [visible, setVisible] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [element])

  return { ref: setElement, className: `reveal ${visible ? 'is-visible' : ''}` }
}
