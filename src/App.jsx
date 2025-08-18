import { useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import LumioCaseStudy from './components/LumioCaseStudy.jsx'
import RizingCaseStudy from './components/RizingCaseStudy.jsx'
import DBCaseStudy from './components/DBCaseStudy.jsx'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleViewChange = (view) => {
    setCurrentView(view)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'lumio':
        return <LumioCaseStudy onBackToHome={() => handleViewChange('home')} />
      case 'rizing':
        return <RizingCaseStudy onBackToHome={() => handleViewChange('home')} />
      case 'db':
        return <DBCaseStudy onBackToHome={() => handleViewChange('home')} />
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