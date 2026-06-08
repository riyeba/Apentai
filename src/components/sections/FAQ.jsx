import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@data/faqs'
import AnimatedSection from '@components/ui/AnimatedSection'
import { cn } from '@utils/helpers'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={cn(
      'border rounded-xl overflow-hidden transition-all duration-300',
      isOpen ? 'border-primary-200 bg-primary-50/40' : 'border-brand-border bg-white hover:border-neutral-300'
    )}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={cn('font-heading font-semibold text-base leading-snug', isOpen ? 'text-primary-600' : 'text-brand-text')}>
          {faq.question}
        </span>
        <span className={cn(
          'shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all',
          isOpen ? 'bg-primary-500 text-white' : 'bg-neutral-100 text-brand-muted'
        )}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96' : 'max-h-0')}>
        <p className="px-6 pb-5 text-brand-muted text-sm leading-relaxed font-body">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)
  const toggle = id => setOpenId(p => p === id ? null : id)
  const half = Math.ceil(FAQS.length / 2)

  return (
    <section className="section-padding section-alt" id="faq">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4"><span className="pill-badge">FAQs</span></div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">
            Quick Answers to Questions You May Have
          </h2>
          <p className="text-brand-muted text-lg font-body">
            Everything you need to know about our products and services.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatedSection animation="slide-right" className="flex flex-col gap-3">
            {FAQS.slice(0, half).map(faq => (
              <FAQItem key={faq.id} faq={faq} isOpen={openId === faq.id} onToggle={() => toggle(faq.id)} />
            ))}
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={100} className="flex flex-col gap-3">
            {FAQS.slice(half).map(faq => (
              <FAQItem key={faq.id} faq={faq} isOpen={openId === faq.id} onToggle={() => toggle(faq.id)} />
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
