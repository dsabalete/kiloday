import { defineStore } from 'pinia'

export const useBirthdayStore = defineStore('birthdayStore', {
  state: () => {
    return {
      today: new Date(),
      birthDate: null
    }
  }
})
