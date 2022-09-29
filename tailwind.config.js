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
