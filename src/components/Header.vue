<template>
  <header class="header text-center text-green-200">
    <h1 class="text-4xl font-bold text-green-400">KiloDay</h1>
    {{ currentDate }}
    <blockquote class="mt-4 text-center italic">
      "An alternative form of birth celebration, in contrast to the traditional
      birthday. <br />
      Each kiloday is 1000 days apart, starting at birth."
    </blockquote>
    <div class="text-right">
      by
      <a
        href="https://www.urbandictionary.com/define.php?term=kiloday"
        class="link"
        target="_blank"
        >Urban Dictionay</a
      >
    </div>

    <router-link to="/" class="link">TRY IT!</router-link>
    <router-link to="/about" class="link"
      >What is this silly thing about?</router-link
    >
  </header>
</template>

<script setup>
import { getFormattedDateString } from '../commons/utils'

const currentDate = getFormattedDateString()
</script>

<style lang="postcss" scoped>
.header {
  @apply my-4 border-4 border-double border-green-200 p-4 rounded-3xl;
}
.link {
  @apply text-blue-400 hover:text-blue-300;
}
.active {
  @apply hidden;
}
</style>
