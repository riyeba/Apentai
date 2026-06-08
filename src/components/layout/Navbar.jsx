import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@constants'
import { cn } from '@utils/helpers'
import Button from '@components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()
  const navRef   = useRef(null)

  useEffect(() => { setMobileOpen(false); setDropdownOpen(null) }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setDropdownOpen(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        /* WHITE navbar — exact platformlead style */
        'bg-white',
        scrolled ? 'shadow-nav border-b border-brand-border' : 'border-b border-transparent'
      )}
      role="banner"
    >
      <nav
        ref={navRef}
        className="container-custom flex items-center justify-between h-[72px]"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center shrink-0" aria-label="APENTAI Nigeria Limited Home">
          <img
            src="/apentailogo.png"
            alt="A"
            className="h-10 w-auto object-contain -mr-2"
          />
          <span className="font-heading font-bold text-brand-text text-xl leading-none tracking-tight">
            PENTAI
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="relative">
              {link.children ? (
                <>
                  <button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-body',
                      'text-brand-text hover:text-primary-500 transition-colors duration-200',
                      dropdownOpen === link.label && 'text-primary-500'
                    )}
                    onClick={() => setDropdownOpen(p => p === link.label ? null : link.label)}
                    aria-expanded={dropdownOpen === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown size={14} className={cn('transition-transform duration-200', dropdownOpen === link.label && 'rotate-180')} />
                  </button>
                  {dropdownOpen === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-brand-border rounded-xl shadow-card overflow-hidden z-50">
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-brand-text hover:text-primary-500 hover:bg-neutral-50 transition-colors border-b border-brand-border last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.href}
                  className={({ isActive }) => cn(
                    'block px-4 py-2 rounded-lg text-sm font-medium font-body transition-colors duration-200',
                    isActive ? 'text-primary-500' : 'text-brand-text hover:text-primary-500'
                  )}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-1.5 text-sm text-brand-muted hover:text-primary-500 transition-colors"
          >
            <Phone size={13} />
            <span className="font-body">{COMPANY.phone}</span>
          </a>
          {/* Exact platformlead "Contact Us →" button style: outlined with border */}
          <Button as={Link} to="/contact" variant="outline" size="sm" rightIcon={<span>→</span>}>
            Contact Us
          </Button>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="lg:hidden p-2 rounded-lg text-brand-text hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(p => !p)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto',
          'transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container-custom py-6 flex flex-col gap-1 border-t border-brand-border">
          {NAV_LINKS.map(link => (
            <div key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => cn(
                  'block px-4 py-3.5 rounded-xl text-base font-medium font-body transition-colors',
                  isActive ? 'text-primary-500 bg-primary-50' : 'text-brand-text hover:text-primary-500 hover:bg-neutral-50'
                )}
              >
                {link.label}
              </NavLink>
              {link.children && (
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2.5 rounded-lg text-sm text-brand-muted hover:text-primary-500 border-l-2 border-primary-200 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-brand-border flex flex-col gap-3">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 px-4 py-3 text-brand-muted text-sm font-body">
              <Phone size={15} className="text-primary-500" /> {COMPANY.phone}
            </a>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="w-full justify-center">
              Contact Us →
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
