/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'very-light-blue': '#6E61FF',
      'orange-red': '#FF611F',
      'azureish-white': '#DCF7E7',
      'valid': '#47FF92',
      'invalid': '#FF4747',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {
      dropShadow: {
        'normal': '6px 6px 0px black',
        'tiny': '2px 2px 0px black',
      },
    },
  },
  plugins: [],
}

