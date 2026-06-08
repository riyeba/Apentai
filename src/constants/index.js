// ─── Company Info ───────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Apentai Nigeria Limited',
  shortName: 'APENTAI',
  tagline: 'Driving Excellence Across Industries',
  description:
    'APENTAI Nigeria Limited delivers top-tier mechanical services, IT solutions, and real estate services across Nigeria.',
  founded: '2024',
  email: 'info@apentai.com',
  phone: '+234 706 091 2057',
  phone2: '+234 903 451 5906',
  address: 'No. 12, Akinbiyi Street, Ring Road, Ibadan, Oyo State, Nigeria',
  website: 'https://apentai.com',
  rc: 'RC 8594628',
}

// ─── Navigation Links ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Company',     href: '/company' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Tyres & Auto Parts', href: '/services#tyres' },
      { label: 'Lubricants',         href: '/services#lubricants' },
      { label: 'IT Solutions',       href: '/services#it' },
      { label: 'Real Estate',        href: '/real-estate' },
    ],
  },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Contact',     href: '/contact' },
]

// ─── Social Media ────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook:  'https://facebook.com/apentai',
  instagram: 'https://instagram.com/apentai',
  twitter:   'https://twitter.com/apentai',
  linkedin:  'https://linkedin.com/company/apentai',
  whatsapp:  'https://wa.me/2348012345678',
}

// ─── SEO Defaults ────────────────────────────────────────────────────────────
export const SEO_DEFAULTS = {
  titleTemplate: '%s | APENTAI Nigeria Limited',
  defaultTitle:  'APENTAI Nigeria Limited — Tyres, Lubricants, Auto Parts, IT & Real Estate | Ibadan',
  description:
    'APENTAI Nigeria Limited delivers top-tier mechanical services (tyres, lubricants, auto spare parts), IT solutions, and real estate in Ibadan, Nigeria.',
  ogImage: 'https://apentai.com/og-image.jpg',
}
