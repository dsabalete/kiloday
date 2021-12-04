<template>
  <section class="flex flex-col">
    <h2 class="section-title text-center text-green-400">
      Enter your date of birth
    </h2>
    <div class="form-group">
      <label for="day">Day</label>
      <input
        type="number"
        id="day"
        v-model="day"
        min="1"
        max="31"
        required
        @change="updateDate"
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
        @change="updateDate"
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
        @change="updateDate"
      />
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'

export default {
  name: 'BirthdayForm',
  setup() {
    const store = useBirthdayStore()

    const day = ref(store.birthDate.day)
    const month = ref(store.birthDate.month)
    const year = ref(store.birthDate.year)

    const updateDate = () => {
      store.$patch({
        birthDate: {
          day: day.value,
          month: month.value,
          year: year.value
        }
      })
    }

    return {
      day,
      month,
      year,
      updateDate
    }
  }
}
</script>

<style lang="postcss">
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
  @apply mb-0 w-1/3 text-green-300 text-right mr-6;
}
input[type='number'] {
  @apply border-2 rounded-md w-24 text-black pl-4;
}
</style>
