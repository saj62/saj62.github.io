/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FEFCFD',
        'ice': '#BFCDE0',
        'light-purple': '#5D5D81',
        'purple': '#3B3355',
        'black': '#000505',
        'bg': '#EAEAF6',
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
  },
  plugins: [],
}

