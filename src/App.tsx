import { useEffect, useState } from 'react'
import LoadingSkeleton from './components/layout/LoadingSkeleton'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import ProcessSection from './components/sections/ProcessSection'
import ServicesSection from './components/sections/ServicesSection'
import WhyAlnessSection from './components/sections/WhyAlnessSection'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = globalThis.setTimeout(() => setLoading(false), 850)
    return () => globalThis.clearTimeout(timer)
  }, [])

  if (loading) return <LoadingSkeleton />

  return <div className="site-canvas"><SiteHeader theme={theme} onToggleTheme={toggleTheme}/><main><HeroSection/><ServicesSection/><WhyAlnessSection/><AboutSection/><ProcessSection/><ContactSection/></main><SiteFooter/></div>
}
