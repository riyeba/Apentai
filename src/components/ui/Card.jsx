import { cn } from '@utils/helpers'

export default function Card({ className, hover = true, children, ...props }) {
  return (
    <div
      className={cn(
        'surface-card p-6',
        hover && 'surface-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
