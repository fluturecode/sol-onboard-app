module.exports = {
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      url: require.resolve('url/'),
    },
  }
}

