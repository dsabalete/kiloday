<template>
  <div class="home">
    <BirthdayForm />
    <ResultInfo v-if="isValid" />
    <AdditionalInfo v-if="isValid" />
  </div>
</template>

<script setup>
import BirthdayForm from '@/components/BirthdayForm.vue'
import ResultInfo from '@/components/ResultInfo.vue'
import AdditionalInfo from '@/components/AdditionalInfo.vue'

import { computed } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'

const store = useBirthdayStore()

store.birthDate = null

const isValid = computed(() => {
  return store.birthDate !== null
})
</script>

<style lang="postcss" scoped></style>
