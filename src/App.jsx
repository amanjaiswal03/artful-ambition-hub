import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import LumioCaseStudy from './components/LumioCaseStudy.jsx'
import RizingCaseStudy from './components/RizingCaseStudy.jsx'
import DBCaseStudy from './components/DBCaseStudy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll window to top
    window.scrollTo(0, 0)
    // Also scroll document body and html to top
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="w-full min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lumio" element={<LumioCaseStudy />} />
        <Route path="/rizing" element={<RizingCaseStudy />} />
        <Route path="/db" element={<DBCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App