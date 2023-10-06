/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './src/**/*.{js,jsx,ts,tsx}', 
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'maroon-dark': '#952323',
      'maroon-light': '#A73121',
      'cream-dark': '#E2C799',
      'cream-light': '#F2ECBE',
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

