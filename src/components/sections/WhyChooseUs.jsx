import { ShieldCheck, Zap, Users, Award, Truck, HeadphonesIcon } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'

const REASONS = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Products',
    body: 'Every tyre, lubricant, and spare part we supply is certified genuine. No counterfeits — your safety and peace of mind come first.',
  },
  {
    icon: Award,
    title: 'Integrity in Everything',
    body: 'Transparent pricing, honest advice, and no hidden charges. We build relationships on trust — not just transactions.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    body: 'Our team brings real industry experience across mechanical services, IT, and real estate — giving you advice you can actually act on.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Delivery',
    body: 'In-stock inventory and an efficient team mean you get what you need quickly — tyres, lubricants, parts, or IT support.',
  },
  {
    icon: Truck,
    title: 'Nationwide Reach',
    body: 'We deliver auto parts and lubricants to customers across Nigeria at competitive rates. Wherever you are, we get it to you.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    body: 'We stand behind every product and service. Our after-sales team is always available to help when you need us most.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-alt" id="why-us">
      <div className="container-custom">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 justify-center">
            <span className="w-6 h-px bg-primary-500" />
            Why APENTAI
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="text-brand-muted text-lg font-body leading-relaxed">
            We don't just sell products — we deliver outcomes. Here's what you can count on every time you work with us.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <AnimatedSection key={r.title} animation="fade-up" delay={i * 80}>
                <div className="surface-card surface-card-hover p-7 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-text text-lg mb-2">
                      {r.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed font-body">
                      {r.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}
