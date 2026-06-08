import { Link } from 'react-router-dom'
import { CircleDot, Droplets, Settings, Monitor, Building2, ArrowRight } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import { SERVICES } from '@data/services'

const ICON_MAP = { CircleDot, Droplets, Settings, Monitor, Building2 }

export default function ServicesGrid() {
  return (
    /* White bg section — exact platformlead */
    <section className="section-padding section-light" id="services">
      <div className="container-custom">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="pill-badge">What We Offer</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
            We Provide Top Service With Excellent Performance
          </h2>
          <p className="text-brand-muted text-lg font-body">
            From the road to your business to your next property — APENTAI delivers across three powerful sectors.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <AnimatedSection key={service.id} animation="fade-up" delay={i * 80}>
                <Link
                  to={service.href}
                  className="group block surface-card surface-card-hover p-8 h-full"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    {Icon && <Icon size={28} className="text-primary-500" />}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-brand-text mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-brand-muted text-sm leading-relaxed font-body mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-primary-500 text-sm font-semibold font-body group-hover:gap-3 transition-all duration-200">
                    Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
