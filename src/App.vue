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

    <section v-if="birthDate">
      <h2 class="section-title">Your date of birth: {{ birthDateFmt }}</h2>
      <div>Your age: {{ days }} days</div>
      <div>({{ age }} years and {{ ' x' }} days)</div>
      <hr />
      <strong>pending to implement...</strong>
      <div>Next kiloday to celebrate: 99999 days</div>
      <div>Next kiloday date</div>
    </section>

    <section v-if="birthDate">
      <strong>pending to implement...</strong>
      <h2 class="section-title">Some of your noteworthy kilodays:</h2>
      <div>100 days: date</div>
      <div>1000 days: date</div>
      <div>5000 days: date</div>
      <div>10000 days: date</div>
      <div>15000 days: date</div>
      <div>20000 days: date</div>
      <div>25000 days: date</div>
      <div>30000 days: date</div>
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

    const birthDate = computed(() => {
      if (day.value && month.value && year.value) {
        const date = new Date(year.value, month.value - 1, day.value)
        return date.getTime()
      } else {
        return null
      }
    })

    const birthDateFmt = computed(() => {
      if (birthDate.value) {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        const date = new Intl.DateTimeFormat('en-US', options).format(
          birthDate.value
        )
        return date
      } else {
        return null
      }
    })

    const diff = computed(() => {
      const today = new Date().getTime()
      return today - birthDate.value
    })

    const age = computed(() => {
      return new Date(diff.value).getFullYear() - 1970
    })

    const days = computed(() => {
      const ageInDays = diff.value / 1000 / 60 / 60 / 24
      return Math.floor(ageInDays)
    })

    return {
      currentDate: new Date().toLocaleDateString(),
      day,
      month,
      year,
      age,
      birthDate,
      birthDateFmt,
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
