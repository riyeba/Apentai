import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight, MessageSquare } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS } from '@constants'

const FOOTER_LINKS = {
  Companies: [
    { label: 'Company',         href: '/company' },
    { label: 'Real Estate',     href: '/real-estate' },
    { label: 'IT Solutions',    href: '/services#it' },
    { label: 'Auto Parts',      href: '/services#auto-parts' },
  ],
  Resources: [
    { label: 'Our Team',        href: '/company#team' },
    { label: 'Support',         href: '/contact' },
    { label: 'FAQs',            href: '/#faq' },
  ],
}

const SOCIAL = [
  { icon: Facebook,      href: SOCIAL_LINKS.facebook,  label: 'Facebook' },
  { icon: Instagram,     href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Twitter,       href: SOCIAL_LINKS.twitter,   label: 'Twitter' },
  { icon: Linkedin,      href: SOCIAL_LINKS.linkedin,  label: 'LinkedIn' },
  { icon: MessageSquare, href: SOCIAL_LINKS.whatsapp,  label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    /* White footer — exact platformlead style */
    <footer className="bg-white border-t border-brand-border" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/apentailogo.png"
                alt="APENTAI Nigeria Limited"
                className="h-10 w-auto object-contain -mr-2"
              />
              <span className="font-heading font-bold text-brand-text text-xl leading-none tracking-tight">
                PENTAI
              </span>
            </Link>

            <p className="text-brand-muted text-sm leading-relaxed font-body max-w-xs">
              We boost sales and aim to be the top choice in auto parts, IT services, and real estate across Nigeria.
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-primary-500 hover:border-primary-300 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-heading font-semibold text-brand-text text-sm uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-brand-muted hover:text-primary-500 transition-colors font-body flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all text-primary-500" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-brand-text text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-2 text-sm text-brand-muted hover:text-primary-500 transition-colors font-body group">
                  <Phone size={14} className="shrink-0 mt-0.5 text-primary-500" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2 text-sm text-brand-muted hover:text-primary-500 transition-colors font-body">
                  <Mail size={14} className="shrink-0 mt-0.5 text-primary-500" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-brand-muted font-body">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-primary-500" />
                  {COMPANY.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-muted font-body">
            © {year} APENTAI Nigeria Limited. All rights reserved. {COMPANY.rc}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-xs text-brand-muted hover:text-primary-500 transition-colors font-body">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
