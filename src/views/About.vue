<template>
  <div class="about">
    <section>
      <h2 class="section-title">About this project</h2>
      <p>
        This project is nothing more and nothing less than an experiment to test
        vue 3, pinia, tailwindcss and the new composition API
      </p>

      <p>
        Why did I choose the 'Kiloday' subject? Well, I was curious about the
        subject and I wanted to see how it would look like in a real world
        application.
      </p>

      <p>
        Besides that, I also wanted to integrate Sentry and Cypress, and this
        project serves as a good playground to test, break and get some fun 😁
      </p>
    </section>

    <button
      class="bg-green-700 rounded-full py-1 text-green-50 font-bold w-full mx-4 hover:bg-green-600"
      @click="checkout"
    >
      Send some data to Sentry
    </button>
  </div>
</template>

<script setup>
const checkout = () => {
  throw new Error('This is a test error')
}
</script>

<style lang="postcss" scoped>
section {
  @apply px-12;
}
p {
  @apply mb-4;
}
</style>
