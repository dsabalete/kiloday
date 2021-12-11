<template>
  <section>
    <h2 class="section-title">
      Your date of birth: <br />
      {{ birthDateFmt }}
    </h2>
    <div>Your age: {{ days }} days</div>
    <div>({{ age }} years {{ daysFromBirthday }})</div>
    <br />
    <div>Next kiloday to celebrate: {{ nextKilodateToCelebrate }} days</div>
    <div>Next kiloday: {{ nextKilodate }}</div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useBirthdayStore } from '@/stores/birthday'
import { getDateTimeFormat } from '@/commons/utils'

export default {
  name: 'ResultInfo',
  setup() {
    const store = useBirthdayStore()

    const birthDateFmt = computed(() => {
      return getDateTimeFormat(store.birthDate.getTime())
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
      const daysAfterBirthday = Math.floor(days.value % 365.25)
      const textDaysFromBirthday =
        daysAfterBirthday == 0 ? '' : `and ${daysAfterBirthday} days`
      return textDaysFromBirthday
    })

    const nextKilodateToCelebrate = computed(() => {
      return Math.ceil(days.value / 1000) * 1000
    })

    const nextKilodate = computed(() => {
      const time = store.birthDate.getTime()
      const event = new Date(time)
      event.setDate(event.getDate() + nextKilodateToCelebrate.value)
      return getDateTimeFormat(event.getTime())
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

<style lang="postcss">
section {
  @apply my-4 border-4 border-double border-green-200 p-4 rounded-3xl;
}
</style>
