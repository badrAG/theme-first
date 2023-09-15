const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const purgeCss  = require('@fullhuman/postcss-purgecss');
const TerserPlugin  = require('terser-webpack-plugin');
const cssNano  = require('cssnano')


export default {
  head: {
    title: 'bazzar-theme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: []
  },
  target: 'server',
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/main.css',
    '~/assets/css/fontCss.css'
  ],
  plugins: [
    '~/plugins/tools.js',
    '~/plugins/http.js',
    '~/plugins/storeino.js',
    '~/plugins/init.js',
    '~/plugins/events.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/pwa'
  ],
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
    families: {
      Almarai: [400],
      Tajawal: [400],
      'Playfair+Display': [400],
      Sora: [400],
      Poppins: [400],
      Amiri: [400],
      Cairo: [200,300,400,500,600,700],
      'Readex+Pro': [400],
      Oswald: [400]
    }
  },
  purgeCSS: {
    enabled: true,
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'server/**/*.js',
      'store/**/*.js',
      'nuxt.config.js'
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  },
  pwa: {
    icon: false,
    manifest: {
      lang: 'en'
    }
  },
  modules: [
    '@nuxtjs/sentry',
    '@nuxt/image',
    '@nuxtjs/axios',
    'nuxt-compress',
    'nuxt-ssr-cache'
  ],
  sentry: {
    dsn: 'https://223d984c7563639c19a86ba3e0947172@logs.storeino.com/9',
    config: {
      debug: true
    },
    clientConfig: {
      dsn: 'https://223d984c7563639c19a86ba3e0947172@logs.storeino.com/9'
    }
  },
  axios: {},
  'nuxt-compress': {
    gzip: {
      threshold: 8192
    },
    brotli: {
      threshold: 8192
    }
  },
  cache: {
    useHostPrefix: true,
    pages: [
      '/'
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60
    }
  },
  serverMiddleware: ['~/server/index'],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    terser: true,
    optimizeCSS: true,
    treeShaking: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    postcss: {
      postcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          cssNano({
            preset: 'default'
          }),
          purgeCss({
            enabled: true,
            content: [
              './components/**/*.vue',
              './layouts/**/*.vue',
              './pages/**/*.vue',
              './plugins/**/*.js',
              './server/**/*.js',
              './store/**/*.js',
              './nuxt.config.js'
            ],
            safelist: ['html', 'body'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
        cacheGroups: {
          tailwindConfig: {
            test: /tailwind\.config/,
            chunks: 'all',
            priority: 10,
            name: true
          }
        }
      },
      minimizer: [
        new MiniCssExtractPlugin({
          filename: "./assets/css/main.css"
        }),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }]
          },
        }),
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            },
          },
        })
      ]
    }
  }
}