/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary: Orange (exact platformlead button & accent color) ──
        primary: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Main CTA button orange
          600: '#ea6c0a',
          700: '#c2560a',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // ── Neutrals: Light backgrounds (exact platformlead) ──
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',  // Section alternating bg
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // ── Dark backgrounds for inner pages ──
        dark: {
          700: '#1f2937',
          800: '#161b27',
          900: '#0f1117',
          950: '#080b10',
        },
        // ── Brand grays matching platformlead ──
        brand: {
          white:    '#ffffff',
          offwhite: '#f8f8f8',
          section:  '#f5f4f0',  // Warm off-white section bg
          text:     '#1a1a1a',  // Near-black body text
          muted:    '#6b7280',  // Gray muted text
          border:   '#e5e7eb',  // Light border
          card:     '#ffffff',  // Card background
          cardbg:   '#f9fafb',  // Subtle card bg
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.25)',
        'glow-sm':     '0 0 20px rgba(249, 115, 22, 0.15)',
        'card':        '0 2px 16px rgba(0, 0, 0, 0.08)',
        'card-hover':  '0 8px 32px rgba(0, 0, 0, 0.12)',
        'nav':         '0 2px 16px rgba(0, 0, 0, 0.08)',
        'btn':         '0 4px 14px rgba(249, 115, 22, 0.35)',
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero':     'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)',
        'gradient-orange':   'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-section':  'linear-gradient(180deg, #ffffff 0%, #f5f4f0 100%)',
        'gradient-card':     'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right':'slideRight 0.5s ease-out forwards',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'float':      'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
