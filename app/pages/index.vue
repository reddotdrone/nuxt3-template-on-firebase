<template lang="pug">
div(class="p-12 text-center h-96 lg:h-screen")
  div(class="w-full h-full")
    div(class="flex justify-center items-center h-full")
      div(class="text-black")
        h2(class="font-semibold text-4xl mb-4") Nuxt3 Template on Firebase
        a(class="inline-block px-7 py-3 mb-1 border-2 border-gray text-gray-500 font-medium text-sm leading-snug rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          href="https://github.com/reddotdrone/nuxt3-template-on-firebase"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light") The codes on Github

        div.pt-5
          span(@click="changeLocale" class="px-7 py-3 mb-1 text-gray-500 font-medium text-sm leading-snug rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out") {{ $t('home.title') }}

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Home'
})

const { locale } = useI18n()
const changeLocale = () => {
  locale.value = (locale.value === 'en') ? 'ja' : 'en'
}

onMounted(() => {
  authStateWrapper((user: User) => {
    console.log(user)
  })
})
</script>