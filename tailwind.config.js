/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0E0C', // Warm Rich Black (Espresso)
        accent: '#C9A84C',  // Champagne Gold
        background: '#FAF8F5', // Ivory
        dark: '#2A2A35',    // Slate
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
