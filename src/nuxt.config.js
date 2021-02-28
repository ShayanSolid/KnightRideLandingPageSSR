
module.exports = {
  ssr: true,
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KnightRide',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'KnightRide - Sharing a ride in public transportation has never been easier. Share your ticket or be taken for free on the bus, tram or train. Try it out!' },
      { hid: 'title', name: 'title', content: 'KnightRide - the cross platform rides sharing application'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'hooper/dist/hooper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'de', iso: 'de-DE', file: 'de.js', dir: 'ltr' },
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    lazy: true,
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://knightride.app',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  css: 'hooper'
  }
}
