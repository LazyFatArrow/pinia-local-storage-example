/**
 * With LocalStorage
 */

import { defineStore } from 'pinia'

const STORE_NAME = 'main'

const getDefaultSettings = () => ({
  fontSize: 14,
  tabSize: 2,
  zoomLevel: 0,
})

const getSetting = () => {
  const settings = localStorage.getItem(STORE_NAME)

  return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useStore = defineStore(STORE_NAME, {
  state: () => ({
    settings: getSetting(),
  }),
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings,
      }

      localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
    },
  },
})

/**
 * With VueUse useStorage
 */
// import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'

// const STORE_NAME = 'settings'

// export const useStore = defineStore('main', {
//   state: () => ({
//     settings: useStorage(
//       STORE_NAME,
//       {
//         fontSize: 14,
//         tabSize: 2,
//         zoomLevel: 0,
//       },
//       localStorage,
//       {
//         mergeDefaults: true,
//       },
//     ),
//   }),
//   actions: {
//     updateSettings(partialSettings) {
//       this.settings = {
//         ...this.settings,
//         ...partialSettings,
//       }
//     },
//   },
// })

/**
 * With pinia-plugin-persistedstate
 */
// import { defineStore } from 'pinia'

// export const useStore = defineStore('main', {
//   state: () => ({
//     settings: {
//       fontSize: 14,
//       tabSize: 2,
//       zoomLevel: 0,
//     },
//   }),
//   actions: {
//     updateSettings(partialSettings) {
//       this.settings = {
//         ...this.settings,
//         ...partialSettings,
//       }
//     },
//   },
//   persist: true,
// })
