/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ne-primary': '#4CAF50',
        'ne-secondary': '#81C784',
        'ne-accent': '#A5D6A7',
        'ne-light': '#E8F5E9'
      }
    }
  },
  plugins: []
}