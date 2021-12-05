<template>
  <section>
    <h2 class="section-title">Some of your noteworthy kilodays:</h2>
    <div>100 days: {{ getKiloDate(100) }}</div>
    <div>1000 days: {{ getKiloDate(1000) }}</div>
    <div>5000 days: {{ getKiloDate(5000) }}</div>
    <div>10000 days: {{ getKiloDate(10000) }}</div>
    <div>15000 days: {{ getKiloDate(15000) }}</div>
    <div>20000 days: {{ getKiloDate(20000) }}</div>
    <div>25000 days: {{ getKiloDate(25000) }}</div>
    <div>30000 days: {{ getKiloDate(30000) }}</div>
  </section>
</template>

<script>
import { useBirthdayStore } from '@/stores/birthday'

export default {
  name: 'AdditionalInfo',
  setup() {
    const store = useBirthdayStore()

    const getKiloDate = (days) => {
      const birthday = new Date(store.birthDate.getTime())
      birthday.setDate(birthday.getDate() + days)
      return birthday.toLocaleDateString()
    }

    return {
      getKiloDate
    }
  }
}
</script>
