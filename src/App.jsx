import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import AboutUs from './sections/AboutUs.jsx'
import Contacts from './sections/Contacts.jsx'
import FAQ from './sections/FAQ.jsx'
import FinalCTA from './sections/FinalCTA.jsx'
import Gallery from './sections/Gallery.jsx'
import HeroSection from './sections/HeroSection.jsx'
import Services from './sections/Services.jsx'
import Testemonials from './sections/Testemonials.jsx'
import TemplateCategoryPage from './pages/TemplateCategoryPage.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Testemonials />
      <Gallery />
      <FAQ />
      <Contacts />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <NavigationBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/templates/:categoryId" element={<TemplateCategoryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/testemonials" element={<Testemonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/final-cta" element={<FinalCTA />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
