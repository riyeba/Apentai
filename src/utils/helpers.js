/**
 * Combine class names (simple clsx alternative)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Smooth scroll to a section by ID
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Format phone number for WhatsApp link
 */
export function whatsappLink(phone, message = '') {
  const clean = phone.replace(/\D/g, '')
  return `https://wa.me/${clean}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

/**
 * Truncate text to a given length
 */
export function truncate(text, maxLength = 120) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Delay helper for animations
 */
export function staggerDelay(index, base = 0.1) {
  return index * base
}
