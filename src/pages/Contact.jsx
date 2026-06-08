import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
} from 'lucide-react'
import AnimatedSection from '@components/ui/AnimatedSection'
import Button from '@components/ui/Button'
import { COMPANY, SOCIAL_LINKS } from '@constants'
import { cn } from '@utils/helpers'

// ── Zod validation schema ────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  service: z.enum(['tyres', 'lubricants', 'auto-parts', 'it', 'real-estate', 'other'], {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(120, 'Subject is too long'),
  message: z
    .string()
    .min(20, 'Please write at least 20 characters')
    .max(2000, 'Message is too long'),
})

const SERVICES_OPTIONS = [
  { value: 'tyres', label: 'Tyres' },
  { value: 'lubricants', label: 'Lubricants' },
  { value: 'auto-parts', label: 'Auto Spare Parts' },
  { value: 'it', label: 'IT Solutions' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'other', label: 'Other / General Enquiry' },
]

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: [COMPANY.address],
    href: null,
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [COMPANY.phone, COMPANY.phone2],
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [COMPANY.email],
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 4:00 PM'],
    href: null,
  },
]

const SOCIAL = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter / X' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: MessageSquare, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
]

// ── Field component ──────────────────────────────────────────────────────────
function Field({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-neutral-700 font-body">
        {label}
        {required && (
          <span className="text-primary-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 font-body mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(hasError) {
  return cn(
    'w-full px-4 py-3 rounded-xl font-body text-sm text-brand-text',
    'bg-white border transition-all duration-200',
    'placeholder-neutral-400',
    'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400',
    hasError ? 'border-red-400 bg-red-50' : 'border-brand-border hover:border-neutral-300'
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async data => {
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | APENTAI Nigeria Limited</title>
        <meta
          name="description"
          content="Get in touch with APENTAI Nigeria Limited. Send us a message, call us, or visit our office in Ibadan, Nigeria."
        />
        <link rel="canonical" href="https://apentai.com/contact" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 bg-neutral-50 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <span className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Get In Touch
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h1
              className="font-heading font-extrabold text-brand-text mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              We Would Love to <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-brand-muted text-lg font-body">
              Have a question, need a quote, or want to start a project? Our team typically responds
              within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Left: Info ── */}
            <AnimatedSection animation="slide-right" className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-heading font-bold text-2xl text-brand-text mb-2">
                  Contact Information
                </h2>
                <div className="orange-line" />
              </div>

              {CONTACT_ITEMS.map(item => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={item.title}
                    {...(item.href ? { href: item.href } : {})}
                    className={cn(
                      'flex gap-4 p-5 rounded-2xl border border-brand-border bg-white transition-all duration-200',
                      item.href && 'hover:border-primary-300 hover:bg-primary-50 cursor-pointer'
                    )}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={17} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted uppercase tracking-wider font-body mb-1">
                        {item.title}
                      </p>
                      {item.lines.map(line => (
                        <p key={line} className="text-brand-text text-sm font-body leading-snug">
                          {line}
                        </p>
                      ))}
                    </div>
                  </Wrapper>
                )
              })}

              {/* Social */}
              <div className="pt-4">
                <p className="text-xs text-brand-muted uppercase tracking-wider font-body mb-3">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-primary-500 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* ── Right: Form ── */}
            <AnimatedSection animation="slide-left" className="lg:col-span-3">
              <div className="surface-card p-8 md:p-10">
                <h2 className="font-heading font-bold text-2xl text-brand-text mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-muted text-sm font-body mb-8">
                  Fill in the form and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-brand-text">
                      Message Sent!
                    </h3>
                    <p className="text-brand-muted font-body max-w-sm">
                      Thank you for reaching out. Our team will review your message and get back to
                      you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" error={errors.name?.message} required>
                        <input
                          {...register('name')}
                          type="text"
                          placeholder="e.g. Taiwo Akinpennu"
                          className={inputClass(!!errors.name)}
                          autoComplete="name"
                        />
                      </Field>
                      <Field label="Email Address" error={errors.email?.message} required>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="you@example.com"
                          className={inputClass(!!errors.email)}
                          autoComplete="email"
                        />
                      </Field>
                    </div>

                    {/* Row 2: Phone + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone Number" error={errors.phone?.message}>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+234 706 091 2057"
                          className={inputClass(!!errors.phone)}
                          autoComplete="tel"
                        />
                      </Field>
                      <Field label="Service of Interest" error={errors.service?.message} required>
                        <select
                          {...register('service')}
                          className={cn(inputClass(!!errors.service), 'cursor-pointer')}
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-white text-brand-muted">
                            Select a service…
                          </option>
                          {SERVICES_OPTIONS.map(opt => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              className="bg-white text-brand-text"
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Subject */}
                    <Field label="Subject" error={errors.subject?.message} required>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="How can we help you?"
                        className={inputClass(!!errors.subject)}
                      />
                    </Field>

                    {/* Message */}
                    <Field label="Message" error={errors.message?.message} required>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Tell us more about your enquiry…"
                        className={cn(inputClass(!!errors.message), 'resize-none leading-relaxed')}
                      />
                    </Field>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      loading={isSubmitting}
                      rightIcon={!isSubmitting && <Send size={16} />}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-brand-muted font-body text-center">
                      By submitting this form you agree to our{' '}
                      <span className="text-neutral-600 underline cursor-pointer">
                        Privacy Policy
                      </span>
                      . We respect your data and never spam.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-neutral-50 border-t border-brand-border">
        <div className="container-custom pb-20 pt-10">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-brand-border bg-neutral-100 h-72 flex items-center justify-center relative">
              <iframe
                title="APENTAI Nigeria Limited Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d3.9!3d7.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjQnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                className="w-full h-full border-0 grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm border border-brand-border rounded-xl px-6 py-4 text-center shadow-card">
                  <MapPin size={20} className="text-primary-500 mx-auto mb-2" />
                  <p className="text-brand-text font-heading font-semibold text-sm">
                    APENTAI Nigeria Limited
                  </p>
                  <p className="text-brand-muted text-xs font-body mt-1">
                    Ring Road, Ibadan, Oyo State
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
