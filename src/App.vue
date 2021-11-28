<template>
  <div class="container">
    <header>
      <h1>KiloDay</h1>
      {{ currentDate }}
    </header>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      currentDate: new Date().toLocaleDateString()
    }
  }
}
</script>

<style></style>
