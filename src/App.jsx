import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import ScrollToTop from '@components/layout/ScrollToTop'
import LoadingSpinner from '@components/ui/LoadingSpinner'

// ─── Lazy-loaded pages for code splitting ────────────────────────────────────
const Home       = lazy(() => import('@pages/Home'))
const Company    = lazy(() => import('@pages/Company'))
const Services   = lazy(() => import('@pages/Services'))
const RealEstate = lazy(() => import('@pages/RealEstate'))
const Contact    = lazy(() => import('@pages/Contact'))
const NotFound   = lazy(() => import('@pages/NotFound'))

// ─── Page loader wrapper ─────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <LoadingSpinner />
    </div>
  )
}

// ─── App Shell ───────────────────────────────────────────────────────────────
function AppShell() {
  const location = useLocation()

  // Scroll to section if hash is present after navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Accessibility: skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/company"     element={<Company />} />
            <Route path="/services"    element={<Services />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
