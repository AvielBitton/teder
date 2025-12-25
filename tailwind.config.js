/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ['Heebo', 'system-ui', 'sans-serif'],
      },
      colors: {
        mystical: {
          dark: '#0a0a12',
          purple: '#8b5cf6',
          gold: '#fbbf24',
          violet: '#a855f7',
        },
      },
    },
  },
  plugins: [],
}

