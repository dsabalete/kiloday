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
    <button
      class="bg-green-700 rounded-full py-1 hover:bg-green-600 text-green-50 font-bold"
      @click="wipe"
    >
      WIPE
    </button>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'

export default {
  name: 'BirthdayForm',
  setup() {
    const store = useBirthdayStore()

    let day = ref()
    let month = ref()
    let year = ref()

    const updateDate = () => {
      if (day.value && month.value && year.value) {
        store.birthDate = new Date(year.value, month.value - 1, day.value)
      }
    }

    const wipe = () => {
      store.birthDate = null
      day.value = null
      month.value = null
      year.value = null
    }

    return {
      day,
      month,
      year,
      updateDate,
      wipe
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
  @apply border-2 rounded-md w-24 text-black pl-4 bg-green-100;
}
</style>
