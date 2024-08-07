/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Blue-Dark-Mode-Elements': 'hsl(209, 23%, 22%)',
        'Very-Dark-Blue-Dark-Mode-Background': 'hsl(207, 26%, 17%)',
        'Very-Dark-Blue-Light-Mode-Text': 'hsl(200, 15%, 8%)',
        'Dark-Gray-Light-Mode-Input': 'hsl(0, 0%, 52%)',
        'Very-Light-Gray-Light-Mode-Background': 'hsl(0, 0%, 98%)',
        'White-Dark-Mode-Text-Light-Mode-Elements': 'hsl(0, 0%, 100%)',
      },
      boxShadow: {
        'light-box-shadow': '0 0 5px 0 hsla(0, 0%, 52%, 0.425)',
        'dark-box-shadow': '0 0 4px 0 var(--Very-Dark-Blue-Light-Mode-Text)'
      }
    },
  },
  plugins: [],
}
