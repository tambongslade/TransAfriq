import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/common/SplashScreen'
import Home from './pages/Home'
import VehicleDetail from './pages/VehicleDetail'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure splash screen shows for at least 1 second
    const minLoadTime = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(minLoadTime)
  }, [])

  if (isLoading) {
    return <SplashScreen onLoadingComplete={() => setIsLoading(false)} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicule/:id" element={<VehicleDetail />} />
        <Route path="/equipement/:id" element={<VehicleDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/comment-ca-marche" element={<HowItWorks />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
