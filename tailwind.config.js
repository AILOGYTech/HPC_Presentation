/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#40E0D0', // Turquoise / Light cyan accent
        },
        dark: '#333333',
        light: '#CCCCCC',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'], // Font chữ không chân hiện đại
        serif: ['Merriweather', 'serif'], // Font chữ có chân cho Tiêu đề Cover
      }
    },
  },
  plugins: [],
}
