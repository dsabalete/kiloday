import { defineStore } from 'pinia'

export const useBirthdayStore = defineStore('birthdayStore', {
  state: () => {
    return {
      today: new Date(),
      birthDate: {
        day: null,
        month: null,
        year: null
      }
    }
  },

  getters: {
    birthDateTime: (state) => {
      return new Date(
        state.birthDate.year,
        state.birthDate.month - 1,
        state.birthDate.day
      ).getTime()
    },

    birthDateFmt: (state) => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Intl.DateTimeFormat('en-US', options).format(
        state.birthDateTime
      )
    },

    isValid: (state) => {
      return (
        state.birthDate.day !== null &&
        state.birthDate.month !== null &&
        state.birthDate.year !== null
      )
    },

    diff: (state) => {
      return state.today.getTime() - state.birthDateTime
    },

    age: (state) => {
      return new Date(state.diff).getFullYear() - 1970
    },

    days: (state) => {
      const ageInDays = state.diff / 1000 / 60 / 60 / 24
      return Math.floor(ageInDays)
    },

    daysFromBirthday: (state) => {
      const days = state.days
      const daysFromBirthday = days % 365
      return daysFromBirthday
    },

    nextKilodateToCelebrate: (state) => {
      return Math.ceil(state.days / 1000) * 1000
    },

    nextKilodate: (state) => {
      const birthday = new Date(state.birthDateTime)
      birthday.setDate(birthday.getDate() + state.nextKilodateToCelebrate)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Intl.DateTimeFormat('en-US', options).format(
        birthday.getTime()
      )
    }
  }
})
