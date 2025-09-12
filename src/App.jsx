import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage.jsx'
import LumioCaseStudy from './components/LumioCaseStudy.jsx'
import RizingCaseStudy from './components/RizingCaseStudy.jsx'
import DBCaseStudy from './components/DBCaseStudy.jsx'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleViewChange = (view) => {
    setCurrentView(view)
  }

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentView])

  const renderCurrentView = () => {
    switch (currentView) {
      case 'lumio':
        return (
          <LumioCaseStudy 
            onBackToHome={() => handleViewChange('home')} 
            onNavigateToRizing={() => handleViewChange('rizing')}
            onNavigateToDB={() => handleViewChange('db')}
          />
        )
      case 'rizing':
        return (
          <RizingCaseStudy 
            onBackToHome={() => handleViewChange('home')} 
            onNavigateToLumio={() => handleViewChange('lumio')}
            onNavigateToDB={() => handleViewChange('db')}
          />
        )
      case 'db':
        return (
          <DBCaseStudy 
            onBackToHome={() => handleViewChange('home')} 
            onNavigateToLumio={() => handleViewChange('lumio')}
            onNavigateToRizing={() => handleViewChange('rizing')}
          />
        )
      case 'home':
      default:
        return (
          <LandingPage
            onNavigateToLumio={() => handleViewChange('lumio')}
            onNavigateToRizing={() => handleViewChange('rizing')}
            onNavigateToDB={() => handleViewChange('db')}
          />
        )
    }
  }

  return (
    <div className="w-screen h-screen">
      {renderCurrentView()}
    </div>
  )
}

export default App