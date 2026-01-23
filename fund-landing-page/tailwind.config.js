/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        eden: {
          DEFAULT: '#11523c',
          dark: '#0d4330',
        },
        elephant: {
          DEFAULT: '#112e4a',
          dark: '#0c2338',
        },
      },
    },
  },
  plugins: [],
}
