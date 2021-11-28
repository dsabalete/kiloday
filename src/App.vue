<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto px-4">
    <header class="text-center">
      <h1 class="text-4xl font-bold">KiloDay</h1>
      {{ currentDate }}
    </header>
    <section>
      <h2 class="section-title">Enter your date of birth</h2>
      <form class="flex flex-col">
        <div class="form-group">
          <label for="day">Day</label>
          <input
            type="number"
            id="day"
            v-model="day"
            min="1"
            max="31"
            required
          />
        </div>
        <div class="form-group">
          <label for="month">Month</label>
          <input
            type="number"
            id="month"
            v-model="month"
            min="1"
            max="12"
            required
          />
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input
            type="number"
            id="year"
            v-model="year"
            min="1900"
            max="2021"
            required
          />
        </div>
      </form>
    </section>

    <section v-if="diff">
      <div>Your date of birth: {{ day }}/{{ month }}/{{ year }}</div>
      <div>Your age: {{ age }} ({{ days }} days)</div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const day = ref(null)
    const month = ref(null)
    const year = ref(null)

    const age = computed(() => {
      if (day.value && month.value && year.value) {
        const date = new Date(year.value, month.value - 1, day.value)
        const birthDate = date.getTime()
        const today = new Date().getTime()
        const diff = today - birthDate
        console.log(diff / 1000 / 60 / 60 / 24)
        return new Date(diff).getFullYear() - 1970
      } else {
        return null
      }
    })

    const diff = computed(() => {
      if (day.value && month.value && year.value) {
        const date = new Date(year.value, month.value - 1, day.value)
        const birthDate = date.getTime()
        const today = new Date().getTime()
        return today - birthDate
      } else {
        return null
      }
    })

    const days = computed(() => {
      return diff.value / 1000 / 60 / 60 / 24
    })

    return {
      currentDate: new Date().toLocaleDateString(),
      day,
      month,
      year,
      age,
      diff,
      days
    }
  }
}
</script>

<style lang="postcss">
header,
section {
  @apply my-4 border-4 border-double border-green-200 p-4 rounded-3xl;
}
.section-title {
  @apply text-xl font-bold mb-4;
}
.form-group {
  @apply flex flex-row mb-4;
}
label {
  @apply mb-0 w-1/3;
}
input {
  @apply border-2 rounded-md w-1/3;
}
</style>
