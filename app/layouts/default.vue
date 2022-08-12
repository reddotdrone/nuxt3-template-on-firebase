<template lang="pug">
div
  PageHeader
  div(class="flex-1 w-full flex flex-col")
    div(class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full")
      slot
  PageFooter
</template>
