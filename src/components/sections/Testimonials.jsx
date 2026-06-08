import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@data/testimonials'
import AnimatedSection from '@components/ui/AnimatedSection'
import { cn } from '@utils/helpers'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  const visible = [
    TESTIMONIALS[current % total],
    TESTIMONIALS[(current + 1) % total],
    TESTIMONIALS[(current + 2) % total],
  ]

  return (
    <section className="section-padding section-light" id="testimonials">
      <div className="container-custom">

        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="mb-3"><span className="pill-badge">Testimonials</span></div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text">
              Our Clients Love Us.
            </h2>
            <p className="text-brand-muted mt-2 font-body">
              Discover how our expertise and dedication have helped businesses achieve their goals.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-primary-500 hover:border-primary-300 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-brand-muted text-sm font-body tabular-nums">
              {String(current + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-primary-500 hover:border-primary-300 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <AnimatedSection
              key={`${t.id}-${current}`}
              animation="fade-up"
              delay={i * 80}
              className={cn(
                'surface-card p-8 flex flex-col gap-5',
                i === 1 && 'border-primary-200 shadow-card-hover'
              )}
            >
              <Quote size={28} className="text-primary-200" />

              <div className="flex gap-1" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary-400 fill-primary-400" />
                ))}
              </div>

              <p className="text-brand-text text-sm leading-relaxed font-body flex-1 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-white text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-text text-sm">{t.name}</p>
                  <p className="text-brand-muted text-xs font-body">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
