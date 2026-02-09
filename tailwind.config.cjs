/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F1A',
        midnight: '#0F172A',
        mist: '#E2E8F0',
        aura: '#7C3AED',
        pulse: '#22D3EE',
        ember: '#F97316',
        lucid: '#38BDF8',
        leaf: '#10B981',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(56, 189, 248, 0.25)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at top right, rgba(124, 58, 237, 0.35), transparent 45%), linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.95))',
        'light-hero': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.3), transparent 55%), radial-gradient(circle at top right, rgba(16, 185, 129, 0.25), transparent 45%), linear-gradient(180deg, rgba(248, 250, 252, 1), rgba(226, 232, 240, 0.8))',
        'grid-surface': 'linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};
