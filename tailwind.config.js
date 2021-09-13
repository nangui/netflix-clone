module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'netflix-red': '#e50914',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      }),
      fontFamily: {
        sans: ['Netflix Sans Regular', 'sans-serif'],
        bold: ['Netflix Sans Bold', 'sans-serif'],
        black: ['Netflix Sans Black', 'sans-serif'],
        medium: ['Netflix Sans Medium', 'sans-serif'],
        light: ['Netflix Sans Light', 'sans-serif'],
        thin: ['Netflix Sans Thin', 'sans-serif'],
      },
    },
    minHeight: {
      '0': '0',
      '25': '25vh',
      '50': '50vh',
      '72': '72vh',
      '75': '75vh',
      '100': '100vh',
      'unset': 'unset',
    },
  },
  variants: {
    extend: {
      translate: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
