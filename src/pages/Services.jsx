import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CircleDot, Droplets, Settings, Monitor, Building2, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import Button from '@components/ui/Button'
import WhyChooseUs from '@components/sections/WhyChooseUs'
import FAQ from '@components/sections/FAQ'
import Newsletter from '@components/sections/Newsletter'
import { SERVICES } from '@data/services'
import { COMPANY } from '@constants'

const ICON_MAP = { CircleDot, Droplets, Settings, Monitor, Building2 }

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | APENTAI Nigeria Limited</title>
        <meta name="description" content="Explore APENTAI's full range of services — premium tyres, genuine lubricants, auto spare parts, IT solutions, and real estate across Nigeria." />
        <link rel="canonical" href="https://apentai.com/services" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 bg-neutral-50 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              What We Offer
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h1
              className="font-heading font-extrabold text-brand-text mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              All Your Needs,{' '}
              <span className="gradient-text">One Trusted Company</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed font-body">
              From genuine tyres and lubricants to cutting-edge IT solutions and prime real estate — APENTAI delivers across three powerful sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {SERVICES.map((service, idx) => {
        const Icon = ICON_MAP[service.icon]
        const isEven = idx % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${isEven ? 'bg-white' : 'bg-neutral-50'}`}
          >
            <div className="container-custom">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <AnimatedSection animation={isEven ? 'slide-right' : 'slide-left'}>
                  {/* Icon badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                      {Icon && <Icon size={22} className="text-primary-500" />}
                    </div>
                    <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest font-body">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <div className="orange-line mb-6" />
                  <p className="text-brand-muted text-base leading-relaxed font-body mb-8">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8" role="list">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-brand-muted text-sm font-body">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Brands */}
                  {service.brands.length > 0 && (
                    <div className="mb-8">
                      <p className="text-xs text-brand-muted uppercase tracking-widest font-body mb-3">
                        Brands We Carry
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.brands.map(brand => (
                          <span
                            key={brand}
                            className="px-3 py-1 text-xs font-semibold font-body text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-lg"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Button as={Link} to="/contact" rightIcon={<ArrowRight size={16} />}>
                      Get a Quote
                    </Button>
                    <Button as="a" href={`tel:${COMPANY.phone}`} variant="secondary">
                      <Phone size={15} />
                      Call Us
                    </Button>
                  </div>
                </AnimatedSection>

                {/* Visual card */}
                <AnimatedSection
                  animation={isEven ? 'slide-left' : 'slide-right'}
                  delay={100}
                  className={isEven ? '' : 'lg:order-first'}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary-500/5 rounded-3xl blur-2xl pointer-events-none" />

                    <div className="relative surface-card p-10 flex flex-col items-center justify-center min-h-[340px] text-center overflow-hidden">
                      {/* Giant icon watermark */}
                      <div className="absolute opacity-[0.04] pointer-events-none text-neutral-900">
                        {Icon && <Icon size={300} strokeWidth={0.5} />}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="w-24 h-24 rounded-3xl bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto mb-6">
                          {Icon && <Icon size={48} className="text-primary-500" />}
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-text mb-3">
                          {service.title}
                        </h3>
                        <p className="text-brand-muted text-sm font-body max-w-xs mx-auto">
                          {service.shortDesc}
                        </p>

                        {/* Feature count */}
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
                          <CheckCircle size={14} className="text-primary-500" />
                          <span className="text-primary-600 text-xs font-semibold font-body">
                            {service.features.length} Service Features
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-gradient-orange relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)`,
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 font-body max-w-xl mx-auto">
              Contact our team today for a free consultation or product quote. We are always ready to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button as={Link} to="/contact" variant="white" size="lg" rightIcon={<ArrowRight size={18} />}>
                Contact Us Today
              </Button>
              <Button as="a" href={`tel:${COMPANY.phone}`} variant="ghost-dark" size="lg">
                <Phone size={16} />
                {COMPANY.phone}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhyChooseUs />
      <FAQ />
      <Newsletter />
    </>
  )
}
