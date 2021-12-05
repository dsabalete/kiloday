<template>
  <section>
    <h2 class="section-title">
      Your date of birth: <br />
      {{ birthDateFmt }}
    </h2>
    <div>Your age: {{ days }} days</div>
    <div>({{ age }} years and {{ daysFromBirthday }} days)</div>
    <br />
    <div>Next kiloday to celebrate: {{ nextKilodateToCelebrate }} days</div>
    <div>Next kiloday: {{ nextKilodate }}</div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'

export default {
  name: 'ResultInfo',
  setup() {
    const store = useBirthdayStore()

    const birthDateFmt = computed(() => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Intl.DateTimeFormat('en-US', options).format(
        store.birthDate.getTime()
      )
    })

    const diff = computed(() => {
      return store.today.getTime() - store.birthDate.getTime()
    })

    const age = computed(() => {
      return new Date(diff.value).getFullYear() - 1970
    })

    const days = computed(() => {
      const ageInDays = diff.value / 1000 / 60 / 60 / 24
      return Math.floor(ageInDays)
    })

    const daysFromBirthday = computed(() => {
      return days.value % 365
    })

    const nextKilodateToCelebrate = computed(() => {
      return Math.ceil(days.value / 1000) * 1000
    })

    const nextKilodate = computed(() => {
      const { birthDate } = store
      birthDate.setDate(birthDate.getDate() + nextKilodateToCelebrate.value)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Intl.DateTimeFormat('en-US', options).format(
        birthDate.getTime()
      )
    })

    return {
      birthDateFmt,
      days,
      age,
      daysFromBirthday,
      nextKilodateToCelebrate,
      nextKilodate
    }
  }
}
</script>
