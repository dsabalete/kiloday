<template>
  <section v-if="isValid">
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
import { useBirthdayStore } from '@/stores/birthday'

export default {
  name: 'ResultInfo',
  setup() {
    const store = useBirthdayStore()

    store.$patch({
      birthDate: {
        day: 10,
        month: 1,
        year: 1973
      }
    })

    const {
      isValid,
      birthDateFmt,
      days,
      age,
      daysFromBirthday,
      nextKilodateToCelebrate,
      nextKilodate
    } = store

    return {
      isValid,
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
