# APENTAI Limited — Official Website

Production-grade React website for **APENTAI Limited**, a multi-sector Nigerian company delivering mechanical services (tyres, lubricants, auto spare parts), IT solutions, and real estate.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🗂️ Pages

| Route           | Page           |
|-----------------|----------------|
| `/`             | Home           |
| `/company`      | About Company  |
| `/services`     | All Services   |
| `/real-estate`  | Real Estate    |
| `/contact`      | Contact Us     |
| `*`             | 404 Not Found  |

---

## 🛠️ Tech Stack

| Tool                  | Version  | Purpose                  |
|-----------------------|----------|--------------------------|
| React                 | 18.x     | UI framework             |
| Vite                  | 5.x      | Build tool               |
| Tailwind CSS          | 3.x      | Styling                  |
| React Router          | 6.x      | Client-side routing      |
| Framer Motion         | 11.x     | Animations               |
| Lucide React          | 0.383    | Icons                    |
| React Hook Form       | 7.x      | Form handling            |
| Zod                   | 3.x      | Form validation          |
| React Helmet Async    | 2.x      | SEO meta tags            |

---

## 📋 Scripts

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check ESLint errors
npm run lint:fix   # Auto-fix ESLint errors
npm run format     # Format with Prettier
```

---

## 🎨 Brand Colors

| Name     | Hex       | Use                  |
|----------|-----------|----------------------|
| Primary  | `#E85D04` | Orange — main accent |
| Amber    | `#F48C06` | Gradient partner     |
| Dark BG  | `#0A0A0A` | Page background      |
| Surface  | `#1A1A1A` | Card background      |
| Near Black | `#111111` | Secondary background |

**Fonts:** Poppins (headings) + Inter (body)

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

Or push to GitHub and import on [vercel.com](https://vercel.com) — it auto-detects Vite.

### Manual Build
```bash
npm run build
# Upload the /dist folder to your hosting provider
```

---

## 📁 Project Structure

```
src/
├── assets/           # Images & icons
├── components/
│   ├── layout/       # Navbar, Footer, ScrollToTop
│   ├── ui/           # Button, Card, Badge, AnimatedSection, LoadingSpinner
│   └── sections/     # HeroSlider, StatsBar, ServicesGrid, FAQ, etc.
├── pages/            # Home, Company, Services, RealEstate, Contact, NotFound
├── context/          # AppContext (global state)
├── hooks/            # useScrollAnimation, useActiveSection
├── data/             # services.js, testimonials.js, faqs.js, milestones.js
├── utils/            # helpers.js (cn, scrollToSection, etc.)
└── constants/        # index.js (company info, nav links, stats, SEO defaults)
```

---

## ✅ Production Checklist

Before going live:

- [ ] Update `COMPANY` info in `src/constants/index.js`
- [ ] Replace placeholder phone/email with real details
- [ ] Add real Google Maps embed URL in `Contact.jsx`
- [ ] Connect a real email service (EmailJS, Formspree, etc.) in `Contact.jsx`
- [ ] Add real product/property images to `src/assets/images/`
- [ ] Update `VITE_APP_URL` in `.env.local`
- [ ] Update `sitemap.xml` with your real domain
- [ ] Add Google Analytics ID to `.env.local`
- [ ] Add Open Graph image at `public/og-image.jpg` (1200×630px)
- [ ] Set custom domain in Vercel dashboard

---

## 📞 Contact

**APENTAI Limited**
- 📍 Ring Road, Ibadan, Oyo State, Nigeria
- 📞 +234 706 091 2057
- 📧 info@apentai.com
- 🌐 [apentai.com](https://apentai.com)
