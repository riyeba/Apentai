import { forwardRef } from 'react'
import { cn } from '@utils/helpers'

const variants = {
  // Solid orange CTA — primary action
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 active:scale-[0.97] shadow-btn hover:shadow-glow-orange',
  // Outlined orange — secondary action on light backgrounds
  outline:
    'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white active:scale-[0.97]',
  // Subtle border — tertiary on light backgrounds
  secondary:
    'bg-white text-brand-text border border-brand-border hover:border-primary-400 hover:text-primary-500 active:scale-[0.97] shadow-sm',
  // Ghost on light backgrounds
  ghost:
    'bg-transparent text-brand-muted hover:text-primary-500 hover:bg-primary-50 active:scale-[0.97]',
  // Ghost on dark backgrounds (dark sections, orange banners)
  'ghost-dark':
    'bg-transparent text-white/75 border border-white/25 hover:bg-white/10 hover:text-white hover:border-white/40 active:scale-[0.97]',
  // White fill — for use on coloured (orange) backgrounds
  white:
    'bg-white text-brand-text hover:bg-neutral-50 active:scale-[0.97] shadow-sm',
  // Dark fill
  dark:
    'bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.97]',
}

const sizes = {
  sm:  'h-9  px-4   text-sm    rounded-lg',
  md:  'h-11 px-6   text-sm    rounded-xl',
  lg:  'h-12 px-8   text-[0.9375rem] rounded-xl tracking-wide',
  xl:  'h-14 px-10  text-base  rounded-xl tracking-wide',
}

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className, children, loading = false, leftIcon, rightIcon, as: Tag = 'button', ...props },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold font-body',
        'transition-all duration-200 ease-smooth',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'select-none whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : leftIcon}
      {children}
      {!loading && rightIcon}
    </Tag>
  )
})

export default Button
