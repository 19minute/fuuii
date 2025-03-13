/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Grid with 4 columns for mobile
        'mobile-grid': 'repeat(4, minmax(0, 1fr))',
      },
      height: {
        // Grid row height
        'grid-row': '100px',
      },
    },
  },
  plugins: [],
};
