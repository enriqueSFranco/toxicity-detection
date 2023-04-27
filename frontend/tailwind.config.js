/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0E172A',
        'secondary-blue': '#15273F',
        'primaty-gray': '#1E293B',
        'secondary-gray': '#8D9CB1',
        'twitch-color': '#9146FF'
      }
    }
  },
  plugins: []
}
