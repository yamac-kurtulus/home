const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx, vue}'],
    darkMode: true,
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }