import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import SolutionsSection from './components/SolutionsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-[#e2e8f0]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
