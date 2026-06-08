import { cn } from '@utils/helpers'

const variants = {
  orange: 'bg-primary-500/15 text-primary-400 border-primary-500/30',
  gray:   'bg-white/5 text-gray-400 border-white/10',
  green:  'bg-green-500/15 text-green-400 border-green-500/30',
  blue:   'bg-blue-500/15 text-blue-400 border-blue-500/30',
}

export default function Badge({ variant = 'orange', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold',
        'rounded-full border tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
