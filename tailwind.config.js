/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // M3 corner radius scale. Default md=12dp (cards); lg=16dp (dialogs/sheets).
      borderRadius: {
        none: '0',
        xs: '0.25rem',   // 4dp
        sm: '0.5rem',    // 8dp
        md: '0.75rem',   // 12dp — default for cards
        lg: '1rem',      // 16dp — dialogs, sheets
        xl: '1.75rem',   // 28dp — large FAB-style
        '2xl': '2rem',
        '3xl': '2.5rem',
        full: '9999px',
      },
      // M3 type scale (display, headline, title, body, label).
      // Reference: m3.material.io/styles/typography/type-scale-tokens
      fontFamily: {
        sans: ['var(--font-roboto-flex)', '"Roboto Flex"', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', '"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Display
        'display-lg':   ['3.5625rem', { lineHeight: '4rem',     letterSpacing: '-0.015625em', fontWeight: '400' }],
        'display-md':   ['2.8125rem', { lineHeight: '3.25rem',  letterSpacing: '0',           fontWeight: '400' }],
        'display-sm':   ['2.25rem',   { lineHeight: '2.75rem',  letterSpacing: '0',           fontWeight: '400' }],
        // Headline
        'headline-lg':  ['2rem',      { lineHeight: '2.5rem',   letterSpacing: '0',           fontWeight: '400' }],
        'headline-md':  ['1.75rem',   { lineHeight: '2.25rem',  letterSpacing: '0',           fontWeight: '400' }],
        'headline-sm':  ['1.5rem',    { lineHeight: '2rem',     letterSpacing: '0',           fontWeight: '500' }],
        // Title
        'title-lg':     ['1.375rem',  { lineHeight: '1.75rem',  letterSpacing: '0',           fontWeight: '500' }],
        'title-md':     ['1rem',      { lineHeight: '1.5rem',   letterSpacing: '0.009375em',  fontWeight: '500' }],
        'title-sm':     ['0.875rem',  { lineHeight: '1.25rem',  letterSpacing: '0.007143em',  fontWeight: '500' }],
        // Body
        'body-lg':      ['1rem',      { lineHeight: '1.5rem',   letterSpacing: '0.03125em',   fontWeight: '400' }],
        'body-md':      ['0.875rem',  { lineHeight: '1.25rem',  letterSpacing: '0.017857em',  fontWeight: '400' }],
        'body-sm':      ['0.75rem',   { lineHeight: '1rem',     letterSpacing: '0.033333em',  fontWeight: '400' }],
        // Label
        'label-lg':     ['0.875rem',  { lineHeight: '1.25rem',  letterSpacing: '0.007143em',  fontWeight: '500' }],
        'label-md':     ['0.75rem',   { lineHeight: '1rem',     letterSpacing: '0.041667em',  fontWeight: '500' }],
        'label-sm':     ['0.6875rem', { lineHeight: '1rem',     letterSpacing: '0.045455em',  fontWeight: '500' }],
      },
      // M3 elevation levels (tonal shadow + ambient shadow).
      // Reference: m3.material.io/styles/elevation
      boxShadow: {
        'm3-0': 'none',
        'm3-1': '0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 3px 1px rgba(0,0,0,0.08)',
        'm3-2': '0 1px 2px 0 rgba(0,0,0,0.06), 0 2px 6px 2px rgba(0,0,0,0.10)',
        'm3-3': '0 4px 8px 3px rgba(0,0,0,0.10), 0 1px 3px 0 rgba(0,0,0,0.10)',
        'm3-4': '0 6px 10px 4px rgba(0,0,0,0.12), 0 2px 3px 0 rgba(0,0,0,0.10)',
        'm3-5': '0 8px 12px 6px rgba(0,0,0,0.14), 0 4px 4px 0 rgba(0,0,0,0.10)',
        'm3-card': '0 1px 2px 0 rgba(0,0,0,0.04), 0 1px 1px 0 rgba(0,0,0,0.04)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // M3 semantic status palette (not in shadcn core; used by .callout-* in globals.css)
        success: {
          DEFAULT: 'hsl(var(--success))',
          container: 'hsl(var(--success-container))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          container: 'hsl(var(--warning-container))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          container: 'hsl(var(--info-container))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
