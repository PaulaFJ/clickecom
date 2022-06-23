module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'rose': {
          100: '#f9b7d2',
        },
        'blue': {
          700: '#40348f',
        }
      },
      fontFamily: {
        'sans': 'Poppins, sans-serif',
        'mono': 'Lobster, cursive',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}