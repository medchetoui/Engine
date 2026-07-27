import { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Solutions from './components/sections/Solutions';
import Projects from './components/sections/Projects';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const { isTransitioning } = useLanguage();

  return (
    <div className={`min-h-screen relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background noise texture */}
      <div className="fixed inset-0 bg-noise z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Solutions />
          <Projects />
          <Pricing />
          <FAQ />
          <Process />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
