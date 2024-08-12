/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('/image/hero/bg.webp')",
      'img_bg_hero_mobile': "url('/image/hero/bg-mobile.webp')",
      'img_list_servico': "url('/image/servico/checked.svg')",
      'img_bg_produto': "url('/image/produto/bg.webp')",
      'img_list_medicamento': "url('/image/medicamento/star.svg')",
      'img_bg_bemestar': "url('/image/bemestar/line.png')",
      'img_bg_contato': "url('/image/contato/pin.webp')"

    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-color-red': "#D30011",
        'secondary-color-red': "#FF182D"
      },
      screens: {
        'nav': '900px',
        'screen400': '400px',
        'screen900': '900px',
      }
    },
  },
  plugins: [],
}

