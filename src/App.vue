<template>
  <main class="main-container">
    <Header />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style lang="postcss">
body {
  @apply bg-black;
}
.main-container {
  @apply container max-w-screen-sm md:max-w-screen-md mx-auto px-4 text-green-100;
}
.section-title {
  @apply text-xl font-bold mb-4 text-center text-green-400;
}
::v-deep section {
  @apply my-4 border-4 border-double border-green-200 p-4 rounded-3xl;
}
</style>
