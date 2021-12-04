<template>
  <header class="text-center text-green-200">
    <h1 class="text-4xl font-bold">KiloDay</h1>
    {{ currentDate }}
  </header>
</template>

<script>
export default {
  name: 'Header',
  setup() {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
    return {
      currentDate
    }
  }
}
</script>
