import { Helmet } from 'react-helmet-async'
import HeroSlider          from '@components/sections/HeroSlider'
import MissionVisionValues from '@components/sections/MissionVisionValues'
import ServicesGrid        from '@components/sections/ServicesGrid'
import WhyChooseUs         from '@components/sections/WhyChooseUs'
import FAQ                 from '@components/sections/FAQ'
import Newsletter          from '@components/sections/Newsletter'
import { SEO_DEFAULTS }    from '@constants'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SEO_DEFAULTS.defaultTitle}</title>
        <meta name="description" content={SEO_DEFAULTS.description} />
        <meta property="og:title"       content={SEO_DEFAULTS.defaultTitle} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <link rel="canonical" href="https://apentai.com/" />
      </Helmet>

      <HeroSlider />
      <MissionVisionValues />
      <ServicesGrid />
      <WhyChooseUs />
      <FAQ />
      <Newsletter />
    </>
  )
}
