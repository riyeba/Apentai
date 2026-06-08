import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import Newsletter      from '@components/sections/Newsletter'
import Button          from '@components/ui/Button'

const TEAM = [
  {
    name: 'Taiwo Akinpennu',
    role: 'Founder & CEO',
    bio: 'A Lean Six Sigma Black Belt holder with a BSc in Mechanical Engineering and an MSc in Industrial Engineering, Taiwo brings world-class process excellence to APENTAI. His hands-on experience at Kia Motors and Mikano International Limited gives him a rare edge in quality, operations, and the automotive industry.',
    initials: 'TA',
  },
]

const VALUES = [
  { icon: Target, title: 'Quality First',   desc: 'We source only genuine products and deliver services to the highest standard — no shortcuts.' },
  { icon: Eye,    title: 'Transparency',    desc: 'Honest pricing, clear communication, and no hidden charges. What you see is what you get.' },
  { icon: Heart,  title: 'Customer Focus',  desc: 'Every decision we make is guided by what is best for the people we serve.' },
]

export default function Company() {
  return (
    <>
      <Helmet>
        <title>About Us | APENTAI Nigeria Limited</title>
        <meta name="description" content="Learn the story of APENTAI Nigeria Limited — a new Ibadan-based company delivering genuine auto parts, IT solutions, and real estate services." />
        <link rel="canonical" href="https://apentai.com/company" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 bg-neutral-50 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Our Company
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h1 className="font-heading font-extrabold text-brand-text mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Built on Quality,<br />
              <span className="gradient-text">Driven by Purpose</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed font-body">
              APENTAI Nigeria Limited is a fresh, Ibadan-based company on a mission to raise the standard of mechanical services, IT solutions, and real estate across Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding section-light" id="story">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="section-label mb-3">
                <span className="w-6 h-px bg-primary-500" />
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-6">
                Why We Built <span className="gradient-text">APENTAI</span>
              </h2>
              <div className="space-y-4 text-brand-muted text-base leading-relaxed font-body">
                <p>
                  APENTAI Nigeria Limited was born out of a clear observation: Nigerian vehicle owners, businesses, and individuals deserve access to reliable, genuine products and professional services — all under one roof.
                </p>
                <p>
                  Based in Ibadan, Oyo State, we set out to change that. We started with genuine auto parts and tyres, building from the ground up with an uncompromising commitment to quality and customer trust.
                </p>
                <p>
                  Today, APENTAI spans mechanical services, IT solutions, and real estate — and we're just getting started. Every service we offer carries the same promise: genuine, professional, and dependable.
                </p>
              </div>
              <div className="mt-8">
                <Button as={Link} to="/contact" rightIcon={<ArrowRight size={16} />}>
                  Work With Us
                </Button>
              </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection animation="slide-left" className="flex flex-col gap-5">
              {VALUES.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="surface-card p-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-brand-text mb-1">{v.title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed font-body">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding section-alt" id="team">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Our Team
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text">
              The Person Behind <span className="gradient-text">APENTAI</span>
            </h2>
          </AnimatedSection>

          <div className="flex justify-center">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={i * 100} className="w-full max-w-sm">
                <div className="surface-card surface-card-hover p-8 text-center">
                  <div className="mx-auto mb-5 w-36 rounded-xl overflow-hidden border border-brand-border shadow-sm">
                    <img src="/Mypassport.jpg" alt={member.name} className="w-full h-auto block" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-text mb-1">{member.name}</h3>
                  <p className="text-primary-500 text-sm font-semibold font-body mb-4 uppercase tracking-wider">{member.role}</p>
                  <div className="orange-line mx-auto mb-4" />
                  <p className="text-brand-muted text-sm leading-relaxed font-body">{member.bio}</p>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-white/80 text-lg mb-8 font-body max-w-xl mx-auto">
              Whether you need auto parts, IT support, or property advice — we're here and ready to help.
            </p>
            <Button as={Link} to="/contact" variant="white" size="lg" rightIcon={<ArrowRight size={18} />}>
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
