const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    darkMode: true, // or 'media' or 'class'
    // theme: {
    //   extend: {},
    // },
    variants: {},
    plugins: [],
  }