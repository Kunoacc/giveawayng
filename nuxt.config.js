export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'giveawayng',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api'

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/image',
    ['@nuxtjs/firebase', {
      config: {
        apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
        projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGE_SENDER_ID,
        appId: process.env.NUXT_ENV_FIREBASE_APP_ID
      },
      services: {
        auth: true // Just as example. Can be any other service.
      }
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  tailwindcss: {
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ["dark-mode"]
  }
}
