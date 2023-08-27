/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '768px' },
      },
      backgroundImage: {
        banner: 'url("./assets/home/banner.png")',
        imageServices: 'url("./assets/Rectangle 12.png")',
        imageExperts: 'url("./assets/Rectangle 13.png")',
        bgServices: 'url("./assets/Services/service-banner.png")',
      },
      fontFamily: {
        sans: ['Inter, sans-serif'],
      },
      colors: {
        color: {
          100: '#f8f8f8',
          200: '#181945',
          300: '#797979',
          400: '#fff',
          500: '#583fbc',
          600: '#dbdefa',
          700: '#f6dbfa',
          800: '#fadbe2',
          900: '#041434',
          950: 'rgba(255, 255, 255, 0.6)',
          1000: '#09090b',
        },
      },
    },
  },
  plugins: [],
}
