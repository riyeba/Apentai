import AnimatedSection from '@components/ui/AnimatedSection'
import { STATS } from '@constants'

export default function StatsBar() {
  return (
    /* Orange stats bar — exact platformlead accent strip */
    <section className="bg-primary-500 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} animation="fade-up" delay={i * 80} className="text-center">
              <div className="font-heading font-extrabold text-white text-4xl lg:text-5xl mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium font-body uppercase tracking-wide">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
