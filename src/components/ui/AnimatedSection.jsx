import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { cn } from '@utils/helpers'

const animations = {
  'fade-up':    'translate-y-6 opacity-0',
  'fade-in':    'opacity-0',
  'slide-left': 'translate-x-6 opacity-0',
  'slide-right':'-translate-x-6 opacity-0',
}

export default function AnimatedSection({
  children, animation = 'fade-up', delay = 0, className,
  threshold = 0.12, as: Tag = 'div', ...props
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && animations[animation],
        isVisible && 'translate-x-0 translate-y-0 opacity-100',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
