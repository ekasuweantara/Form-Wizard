import { defineStore } from 'pinia'

export const useUserDataStore = defineStore({
  id: 'userData',
  state: () => ({
    userData: null
  }),
  actions: {
    set(data) {
      this.userData = {...data}
    },
    reset() {
      this.userData = null
    }
  }
})
