import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@components/ui/Button'
import { cn } from '@utils/helpers'

const SLIDES = [
  {
    id: 1,
    badge: 'Mechanical Services',
    headline: 'Genuine Tyres\nfor Every Vehicle',
    sub: 'Premium tyres from trusted brands — the right fit, the right price, fitted by experts.',
    cta: { label: 'View Services', href: '/services#tyres' },
    bg: '/tyre3.jpg',
    bgColor: '#111',
    bgSize: 'cover',
    bgPosition: 'center',
  },
  {
    id: 2,
    badge: 'Mechanical Services',
    headline: 'Premium Lubricants\n& Engine Oils',
    sub: '100% genuine lubricants to keep your engine running smoothly and lasting longer.',
    cta: { label: 'View Services', href: '/services#lubricants' },
    bg: '/oil3.jpg',
    bgColor: '#111',
    bgSize: 'cover',
    bgPosition: 'center',
  },
  {
    id: 3,
    badge: 'IT Solutions',
    headline: 'Transform Your\nBusiness Digitally',
    sub: 'Custom websites, software development, networking, and tech training. We power Nigerian businesses into the digital future.',
    cta: { label: 'Get Started', href: '/services#it' },
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    bgColor: '#111',
    bgSize: 'cover',
    bgPosition: 'center',
  },
  {
    id: 4,
    badge: 'Real Estate',
    headline: 'Find Your Dream\nProperty Today',
    sub: 'Expert property development, sales, and management across Ibadan. Residential, commercial, and investment properties at the right price.',
    cta: { label: 'Get Started', href: '/real-estate' },
    bg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
    bgColor: '#111',
    bgSize: 'cover',
    bgPosition: 'center',
  },
]

export default function HeroSlider() {
  const [current, setCurrent]     = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(index => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next])

  const slide = SLIDES[current]

  return (
    <section
      className="relative h-screen overflow-hidden bg-neutral-900"
      aria-label="Hero banner"
    >
      {/* ── Backgrounds — crossfade with Ken Burns zoom ── */}
      {SLIDES.map(s => (
        <div
          key={s.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            s.id === slide.id ? 'opacity-100' : 'opacity-0'
          )}
        >
          {/* Ken Burns — key tied to slide id so animation restarts on each change */}
          <div
            key={`kb-${s.id}-${s.id === slide.id}`}
            className={cn('absolute inset-0', s.id === slide.id && 'animate-kenburns')}
            style={{
              backgroundColor: s.bgColor,
              backgroundImage: `url(${s.bg})`,
              backgroundSize: s.bgSize,
              backgroundPosition: s.bgPosition,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      ))}

      {/* ── Dark gradient overlay — heavier on left so text stays readable ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* ── Text content ── */}
      <div className="relative z-20 h-full flex items-center pt-[72px]">
        <div className="container-custom w-full flex flex-col items-center text-center">
          <div
            key={`content-${current}`}
            className="max-w-2xl animate-fade-up"
          >
            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 font-body mb-5">
              <span className="w-6 h-px bg-primary-400 inline-block" />
              {slide.badge}
              <span className="w-6 h-px bg-primary-400 inline-block" />
            </span>

            <h1
              className="text-white mb-5"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.8vw, 3.2rem)',
                lineHeight: '1.12',
                letterSpacing: '0em',
                whiteSpace: 'pre-line',
              }}
            >
              {slide.headline}
            </h1>

            <p className="text-white/80 leading-relaxed mb-8 font-body mx-auto" style={{ fontSize: '1.05rem', maxWidth: '36rem' }}>
              {slide.sub}
            </p>

            <Button
              as={Link}
              to={slide.cta.href}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} />}
              className="shadow-btn"
            >
              {slide.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
