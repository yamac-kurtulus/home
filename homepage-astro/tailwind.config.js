module.exports = {
  purge: ['./public/**/*.{scss,sass,css}', './src/**/*.{astro,js,jsx,ts,tsx,vue,scss,sass,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:
      {
        'main': {
          'black': '#121826',
          'blue': '#247ba0',
          'red': '#8c122b',
          'light-blue': '#e8eef2',
          'purple': '#726e97'
        }
      }
    },
  },
  variants: {
    extend: {
      colors:
      {

      }
    },
  },

  //{"Rich Black FOGRA 29":"121826","Celadon Blue":"247ba0","Antique Ruby":"8c122b","Alice Blue":"e8eef2","Rhythm":"726e97"}
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
