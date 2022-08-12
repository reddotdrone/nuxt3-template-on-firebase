import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Nuxt3 Template on Firebase',
      titleTemplate: '%s - Nuxt3 Template on Firebase',
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
    // use this if you use windi css
    //'nuxt-windicss',

    '@nuxt/content',
  ],

  buildModules: [
  ],

  css: [
    // use this if you use tailwind css
    '@/assets/css/main.css',
  ],

  build: {
    transpile: [
      '@headlessui/vue',
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    }
  },

  content: {},
})
