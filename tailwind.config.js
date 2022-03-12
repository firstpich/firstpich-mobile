module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        'primary-color-80': '#2C2F45',
        'primary-color-60': '#3E4261',
        'primary-color-40': '#50567D',
        'primary-color-20': '#61699A',
        'primary-color-10': '#8389B1',
        white: '#FFFFFF',
        black: '#000000',
        'secondary-orange': '#F88C50',
        'grey-dark': '#7D7D7D',
        'grey-light': '#EEEFF8',
        'input-fields-bg': '#31343C',
        'dark-grey': '#1D1D1D',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
