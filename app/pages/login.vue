<template lang="pug">
div(class="p-12 text-center h-96 lg:h-screen")
  div(class="w-full h-full")
    div(class="flex justify-center items-center h-full")
      div(id="firebaseui-auth-container" class="w-full")

</template>

<script setup lang="ts">
useHead({
  title: 'Login'
})

onMounted(() => {
  useFirebaseLogin('#firebaseui-auth-container', async (authResult: any) => {
    const user = authResult.user
    console.log(user)  
  })
})
</script>