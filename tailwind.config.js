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
    screens: {
      'sm': '370px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

