/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
        colors: {
            'surface': '#111111',
            'surface-variant': '#2b2b2b',
            'surface-text': '#c4c4c4',
            'surface-text-variant': '#e0e0e0',
            'navigation-surface': '#3d3d3d',
            'surface-sidebar': '#f9ce44',
            'surface-portfoliocard': '#949494',
        },
      screens: {
        'tablet': '600px',
      },
      keyframes: {
        'fade-in-left': {
            '0%': {
                opacity: '0',
                transform: 'translateX(-20px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)',
            }
        }
      },
        animation: {
            'fade-in-left': 'fade-in-left 3s ease-out',
        }
    },
  },
  plugins: [],
}
