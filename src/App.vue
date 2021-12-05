<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto px-4">
    <Header />

    <BirthdayForm />

    <ResultInfo v-if="isValid" />

    <!-- <section v-if="birthDate">
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
    </section> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'
import Header from './components/Header.vue'
import BirthdayForm from './components/BirthdayForm.vue'
import ResultInfo from './components/ResultInfo.vue'

export default {
  components: { Header, BirthdayForm, ResultInfo },
  setup() {
    const store = useBirthdayStore()

    store.$reset()

    const isValid = computed(() => {
      return store.birthDate !== null
    })

    return { isValid }
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
  @apply mb-0 w-1/3 text-green-300 text-right mr-6;
}
input[type='number'] {
  @apply border-2 rounded-md w-24 text-black pl-4;
}
</style>
