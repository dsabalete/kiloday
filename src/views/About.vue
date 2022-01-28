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
        I was also curious about the composition API and how it would work
        together with vue 3.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
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
