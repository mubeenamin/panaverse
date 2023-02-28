/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{tsx,js,ts,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss'),

    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
