module.exports = {
    purge: {
      enabled: true,
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'server/**/*.js',
        'store/**/*.js',
        'nuxt.config.js'
      ]
    },
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }