import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowRight, Search } from 'lucide-react'
import Button from '@components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | APENTAI Nigeria Limited</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="container-custom text-center py-24">
          <div className="font-heading font-extrabold text-neutral-100 select-none"
            style={{ fontSize: 'clamp(8rem, 25vw, 16rem)', lineHeight: 1 }} aria-hidden="true">
            404
          </div>
          <div className="w-20 h-20 rounded-3xl bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto -mt-8 mb-8 relative z-10">
            <Search size={36} className="text-primary-500" />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-4">Page Not Found</h1>
          <p className="text-brand-muted text-lg font-body max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button as={Link} to="/" size="lg" leftIcon={<Home size={18} />}>Back to Home</Button>
            <Button as={Link} to="/contact" variant="outline" size="lg" rightIcon={<ArrowRight size={18} />}>Contact Support</Button>
          </div>
          <div className="mt-14">
            <p className="text-brand-muted text-sm font-body mb-4">Quick Links</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[{label:'Services',href:'/services'},{label:'Real Estate',href:'/real-estate'},{label:'Company',href:'/company'},{label:'Contact',href:'/contact'}].map(link => (
                <Link key={link.href} to={link.href}
                  className="px-4 py-2 text-sm font-body text-brand-muted hover:text-primary-500 border border-brand-border hover:border-primary-300 rounded-xl bg-white transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
