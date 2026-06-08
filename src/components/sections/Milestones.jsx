import { MILESTONES } from '@data/milestones'
import AnimatedSection from '@components/ui/AnimatedSection'

export default function Milestones() {
  return (
    <section className="section-padding section-light" id="milestones">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-4"><span className="pill-badge">Our Journey</span></div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
            Crucial Turning Points and Accomplishments
          </h2>
          <p className="text-brand-muted text-lg font-body">
            From a single store to a multi-sector powerhouse — the APENTAI story.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Centre vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2" />

          <div className="flex flex-col gap-0 lg:gap-0">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <AnimatedSection
                  key={m.year + m.month}
                  animation={isLeft ? 'slide-right' : 'slide-left'}
                  delay={i * 80}
                  className="lg:grid lg:grid-cols-2 items-center mb-8 lg:mb-0"
                >
                  {/* Card */}
                  <div className={`${isLeft ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'} mb-4 lg:mb-0 lg:py-8`}>
                    <div className="surface-card surface-card-hover p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-heading font-bold text-3xl text-primary-500">{m.year}</span>
                        <span className="text-xs text-brand-muted bg-neutral-100 border border-brand-border px-3 py-1 rounded-full font-body uppercase tracking-wider">
                          {m.month}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-brand-text mb-3">{m.title}</h3>
                      <div className="orange-line mb-4" />
                      <p className="text-brand-muted text-sm leading-relaxed font-body">{m.description}</p>
                    </div>
                  </div>

                  {/* Dot — desktop only */}
                  <div className={`hidden lg:flex justify-center items-center ${isLeft ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-100" />
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
