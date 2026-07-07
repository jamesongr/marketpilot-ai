import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.18)'
      },
      colors: {
        surface: '#111827',
        pane: '#0f172a',
        accent: '#38bdf8',
        mint: '#5eead4'
      }
    }
  },
  plugins: []
};

export default config;
