// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Nuxt3 Template on Firebase',
      titleTemplate: '%s - Nuxt3 Template on Firebase',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt3 Template on Firebase',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'en',
        locales: ['en', 'ja'],
        vueI18n: {
          locale: 'en',
          fallbackLocale: 'en',
          availableLocales: ['en', 'ja'],
          //silentFallbackWarn: true,
          // missingWarn: false,
          messages: {
            en: {

            },
            ja: {

            }
          }
        }
      }
    ]
  ],

  css: [
    '@/assets/css/main.css',
  ],


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [
      '@headlessui/vue',
      '@heroicons/vue'
    ],
  },

})
