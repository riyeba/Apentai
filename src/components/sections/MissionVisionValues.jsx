import AnimatedSection from '@components/ui/AnimatedSection'

/*
  Exact platformlead Mission/Vision/Values layout:
  - WHITE background
  - Left: pill badge (orange border) + bold heading + body text
  - Right: image
  - Alternating layout per section
  - Dark near-black headings, gray body text
*/
const MVV = [
  {
    badge: 'Our Mission',
    title: 'Empowering Growth Through Innovation',
    body: 'To provide genuine, high-quality mechanical products and innovative technology and real estate solutions that empower businesses and individuals across Nigeria to achieve their goals with confidence and peace of mind.',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80',
    imgAlt: 'Team working together on mission',
    reverse: false,
  },
  {
    badge: 'Our Vision',
    title: 'Leading the Future of Industry',
    body: "We envision APENTAI becoming Nigeria's most trusted diversified service company — a household name in auto parts, IT solutions, and real estate — recognised for uncompromising quality, innovation, and exceptional customer satisfaction.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imgAlt: 'Forward-looking vision',
    reverse: true,
  },
  {
    badge: 'Our Values',
    title: 'Our Commitment to Excellence',
    body: 'We uphold the highest ethical standards in all our actions, continuously seeking new and better ways to serve our clients. We strive for excellence in everything we do and believe in the power of teamwork, partnerships, and mutual respect.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    imgAlt: 'Team values and collaboration',
    reverse: false,
  },
]

export default function MissionVisionValues() {
  return (
    <section className="section-light" id="mission">
      {MVV.map((item, i) => (
        <div key={item.badge} className={`section-padding-sm border-b border-brand-border last:border-0 ${i % 2 === 1 ? 'section-alt' : ''}`}>
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>

              {/* Text — LEFT (or RIGHT if reverse) */}
              <AnimatedSection animation={item.reverse ? 'slide-left' : 'slide-right'} className={item.reverse ? 'lg:order-2' : ''}>
                {/* Pill badge — exact platformlead style */}
                <div className="mb-5">
                  <span className="pill-badge">{item.badge}</span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-text mb-5 leading-tight">
                  {item.title}
                </h2>

                <div className="orange-line mb-6" />

                <p className="text-brand-muted text-base leading-relaxed font-body">
                  {item.body}
                </p>
              </AnimatedSection>

              {/* Image — RIGHT (or LEFT if reverse) */}
              <AnimatedSection animation={item.reverse ? 'slide-right' : 'slide-left'} delay={100} className={item.reverse ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
