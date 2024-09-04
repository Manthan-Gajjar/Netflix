/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      'hero-pattern': "url('./src/images/NetflixBack.jpeg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
    },
    screens: {
        'xxxs': "319px",
        'xxs': "374px",
        'xs': '400px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1620px',
        'laptop': "1444px",
        'large': "1880px",
      },
  },
  plugins: [],
}



