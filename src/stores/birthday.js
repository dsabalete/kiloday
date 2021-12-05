import { defineStore } from 'pinia'

export const useBirthdayStore = defineStore('birthdayStore', {
  state: () => {
    return {
      today: new Date(),
      birthDate: new Date('2000-01-01')
    }
  }
})
