/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ucnavy': '#182B49',
        'ucblue': '#00629B',
        'ucyellow': '#FFCD00',
        'ucgold': '#C69214',
        'coolgray': '#747678',
        'stone': '#B6B1A9',
        'sand': '#F5F0E6',
      },      
    },
  },
  plugins: [],
};