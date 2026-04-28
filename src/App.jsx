import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Barbers from './components/Barbers'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Barbers />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}