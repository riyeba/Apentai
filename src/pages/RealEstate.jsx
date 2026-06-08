import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Building2, MapPin, CheckCircle, ArrowRight, Phone, Home, TrendingUp, Key, Users } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import Button from '@components/ui/Button'
import Newsletter from '@components/sections/Newsletter'
import { COMPANY } from '@constants'

const PROPERTIES = [
  {
    id: 1,
    name: 'APENTAI Court',
    type: 'Residential',
    location: 'Ring Road, Ibadan',
    description: 'A modern 12-unit apartment complex with world-class amenities, solar power, and 24/7 security in a prime Ibadan location.',
    features: ['12 units', '3-bedroom flats', 'Solar power', '24/7 security', 'Parking space', 'Backup water'],
    status: 'Available',
    badge: 'bg-green-50 text-green-700 border-green-200',
    icon: Home,
  },
  {
    id: 2,
    name: 'APENTAI Business Hub',
    type: 'Commercial',
    location: 'Challenge, Ibadan',
    description: 'A purpose-built commercial complex designed for businesses seeking a professional address in the commercial heart of Ibadan.',
    features: ['Office suites', 'Conference rooms', 'High-speed internet', 'Parking', 'CCTV', 'Reception services'],
    status: 'Leasing',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Building2,
  },
  {
    id: 3,
    name: 'APENTAI Estate Plot',
    type: 'Land',
    location: 'Ojoo, Ibadan',
    description: 'Premium survey-approved plots in a developing estate community. Ideal for residential and investment purposes.',
    features: ['Survey approved', 'Government consent', 'Access road', 'Estate security', 'Flexible payment', 'Deed of assignment'],
    status: 'For Sale',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: MapPin,
  },
]

const RE_SERVICES = [
  { icon: Home,       title: 'Residential Sales',     desc: 'Find your perfect home — apartments, duplexes, and standalone houses across Ibadan.' },
  { icon: Building2,  title: 'Commercial Leasing',    desc: 'Premium office and retail spaces for your business in prime Ibadan locations.' },
  { icon: Key,        title: 'Property Management',   desc: 'We manage your property professionally — rent collection, maintenance, tenant management.' },
  { icon: MapPin,     title: 'Land Acquisition',      desc: 'We help you find, verify, and acquire survey-approved land anywhere in Ibadan.' },
  { icon: TrendingUp, title: 'Investment Consulting', desc: 'Expert guidance to help you make smart property investment decisions in Nigeria.' },
  { icon: Users,      title: 'Agency Services',       desc: 'Professional buy, sell, and let services. We represent both buyers and sellers.' },
]

export default function RealEstate() {
  return (
    <>
      <Helmet>
        <title>Real Estate | APENTAI Nigeria Limited</title>
        <meta name="description" content="APENTAI Real Estate — property development, residential sales, commercial leasing, land acquisition, and property management in Ibadan, Nigeria." />
        <link rel="canonical" href="https://apentai.com/real-estate" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-24 bg-neutral-50 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Real Estate Division
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h1
              className="font-heading font-extrabold text-brand-text mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Find Your Next{' '}
              <span className="gradient-text">Dream Property</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed font-body mb-8">
              APENTAI Real Estate helps individuals and businesses buy, sell, lease, and manage properties across Ibadan and beyond. Expert guidance. Trusted transactions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button as={Link} to="/contact" size="lg" rightIcon={<ArrowRight size={18} />}>
                Talk to an Agent
              </Button>
              <Button as="a" href={`tel:${COMPANY.phone}`} variant="secondary" size="lg">
                <Phone size={16} />
                {COMPANY.phone}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── RE Services ── */}
      <section className="section-padding section-light" id="re-services">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Our Real Estate Services
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
              Complete Property <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-brand-muted text-lg font-body">
              Whether you're buying your first home, leasing office space, or investing in land — we have the expertise to guide you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RE_SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <AnimatedSection key={svc.title} animation="fade-up" delay={i * 80}>
                  <div className="surface-card surface-card-hover p-7 h-full flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                      <Icon size={22} className="text-primary-500" />
                    </div>
                    <h3 className="font-heading font-semibold text-brand-text text-lg">{svc.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed font-body flex-1">{svc.desc}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold font-body hover:gap-3 transition-all duration-200"
                    >
                      Enquire Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Properties ── */}
      <section className="section-padding section-alt" id="properties">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Our Properties
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
              Featured <span className="gradient-text">Listings</span>
            </h2>
            <p className="text-brand-muted text-lg font-body">
              Explore our current portfolio of residential and commercial properties across Ibadan.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((prop, i) => {
              const Icon = prop.icon
              return (
                <AnimatedSection key={prop.id} animation="fade-up" delay={i * 100}>
                  <div className="surface-card surface-card-hover h-full flex flex-col overflow-hidden">
                    {/* Property visual */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-50 to-neutral-100 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.06] text-primary-500">
                        <Icon size={200} strokeWidth={0.5} />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-primary-100 shadow-sm flex items-center justify-center mx-auto mb-3">
                          <Icon size={32} className="text-primary-500" />
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold font-body rounded-full border ${prop.badge}`}>
                          {prop.status}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1 gap-4">
                      <div>
                        <p className="text-xs text-primary-500 font-semibold uppercase tracking-wider font-body mb-1">
                          {prop.type}
                        </p>
                        <h3 className="font-heading font-bold text-xl text-brand-text mb-1">{prop.name}</h3>
                        <div className="flex items-center gap-1 text-brand-muted text-xs font-body">
                          <MapPin size={11} />
                          {prop.location}
                        </div>
                      </div>

                      <p className="text-brand-muted text-sm leading-relaxed font-body">{prop.description}</p>

                      <ul className="grid grid-cols-2 gap-2">
                        {prop.features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-xs text-brand-muted font-body">
                            <CheckCircle size={12} className="text-primary-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-brand-border mt-auto">
                        <Button as={Link} to="/contact" size="sm" className="w-full justify-center">
                          Request Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              How It Works
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text">
              Simple, <span className="gradient-text">Stress-Free</span> Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

            {[
              { step: '01', title: 'Consultation',  desc: 'Tell us your needs. We listen, understand, and advise you on the best options.' },
              { step: '02', title: 'Property Search', desc: 'We search our portfolio and the wider market to find the right match for you.' },
              { step: '03', title: 'Inspection',    desc: 'We arrange site visits and walk you through every detail of the property.' },
              { step: '04', title: 'Closing',       desc: 'We handle all documentation, ensure legal compliance, and hand over the keys.' },
            ].map((p, i) => (
              <AnimatedSection key={p.step} animation="fade-up" delay={i * 100} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary-200 flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="font-heading font-bold text-primary-500 text-xl">{p.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-brand-text text-lg mb-2">{p.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-body">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              Ready to Find Your Property?
            </h2>
            <p className="text-white/80 text-lg mb-8 font-body max-w-xl mx-auto">
              Our real estate experts are standing by. Let's find you the right property at the right price.
            </p>
            <Button as={Link} to="/contact" variant="white" size="lg" rightIcon={<ArrowRight size={18} />}>
              Talk to an Agent
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
