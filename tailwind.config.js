/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '50px',
        lg: '120px',
        xl: '180px',
        '2xl': '240px',
      }
    },
  },
  plugins: [],
}

