module.exports = {
  /* optimize for fast reload, dropping all non essential utility classes*/
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "dark": {
          800: "#424242",
          900: "#303030",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
