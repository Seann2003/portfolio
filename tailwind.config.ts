import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Anthropic-inspired palette
        sand: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#EBEBE5',
          300: '#E0E0D9',
          400: '#C9C9C0',
        },
        ink: {
          50: '#8A8A85',
          100: '#6B6B6B',
          200: '#4A4A4A',
          300: '#2D2D2D',
          400: '#1A1A1A',
          500: '#0D0D0D',
        },
        // Anthropic signature coral/salmon
        coral: {
          50: '#FFF5F0',
          100: '#FFE8E0',
          200: '#FFD4C4',
          300: '#FFB8A0',
          400: '#FF957A',
          500: '#E8765B',
          600: '#D45D42',
          700: '#B84A32',
          800: '#9C3A26',
        },
        salmon: {
          50: '#FFF8F5',
          100: '#FFEDE8',
          200: '#FFD9CC',
          300: '#F9BCA8',
          400: '#E8957A',
          500: '#D47154',
          600: '#B85A3D',
        },
        // Legacy support
        jupiter: {
          50: '#FFF8F0',
          100: '#FFEFE0',
          200: '#FFD9B8',
          300: '#FFB84D',
          400: '#FF9A3D',
          500: '#F77F50',
          600: '#E85D3D',
          700: '#D1492E',
          800: '#A63B24',
          900: '#7A2D1C',
        },
        cream: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#EBEBE5',
        },
        charcoal: {
          50: '#8A8A85',
          100: '#6B6B6B',
          200: '#4A4A4A',
          300: '#2D2D2D',
          400: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'headline': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'coral-gradient': 'linear-gradient(135deg, #FFE8E0 0%, #FFD4C4 50%, #F9BCA8 100%)',
        'coral-text': 'linear-gradient(135deg, #E8765B 0%, #D45D42 50%, #B85A3D 100%)',
        'warm-gradient': 'linear-gradient(180deg, #FAFAF8 0%, #FFF8F5 50%, #FFEDE8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;