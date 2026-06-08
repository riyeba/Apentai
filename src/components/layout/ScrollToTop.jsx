import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@utils/helpers'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl',
        'bg-primary-500 text-white shadow-btn',
        'flex items-center justify-center',
        'transition-all duration-300',
        'hover:bg-primary-600 hover:scale-110',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp size={18} />
    </button>
  )
}
