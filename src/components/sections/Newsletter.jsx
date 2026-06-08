import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import Button from '@components/ui/Button'

export default function Newsletter() {
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const validate = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate(email)) { setError('Please enter a valid email address.'); return }
    setError(''); setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false); setSubmitted(true)
  }

  return (
    /* Exact platformlead newsletter — white bg, centered, minimal */
    <section className="section-padding section-light border-t border-brand-border">
      <div className="container-custom">
        <AnimatedSection className="max-w-xl mx-auto text-center">
          <h3 className="font-heading font-bold text-2xl text-brand-text mb-2">
            Join our newsletter
          </h3>
          <p className="text-brand-muted font-body mb-8">
            No need to worry about spam. We hate it too!
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 p-5 rounded-xl bg-green-50 border border-green-200">
              <CheckCircle size={20} className="text-green-500" />
              <p className="text-green-700 font-semibold font-body text-sm">You're subscribed! Thank you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="nl-email" className="sr-only">Email address</label>
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 rounded-xl border border-brand-border bg-white text-brand-text placeholder-neutral-400 font-body text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
                <Button type="submit" variant="primary" size="md" loading={loading} rightIcon={!loading && <ArrowRight size={15} />}>
                  Subscribe
                </Button>
              </div>
              {error && <p className="mt-2 text-xs text-red-500 font-body text-left" role="alert">{error}</p>}
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
