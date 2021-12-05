<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto px-4">
    <Header />

    <BirthdayForm />

    <ResultInfo v-if="isValid" />

    <AdditionalInfo v-if="isValid" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'
import Header from './components/Header.vue'
import BirthdayForm from './components/BirthdayForm.vue'
import ResultInfo from './components/ResultInfo.vue'
import AdditionalInfo from './components/AdditionalInfo.vue'

export default {
  components: { Header, BirthdayForm, ResultInfo, AdditionalInfo },
  setup() {
    const store = useBirthdayStore()

    store.birthDate = null

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
