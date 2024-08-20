import {defineNuxtModule} from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    console.log('!!!!!', {
      preset: nuxt.options.nitro.preset,
      env: {
        NITRO_PRESET: process.env.NITRO_PRESET,
        SERVER_PRESET: process.env.SERVER_PRESET
      }
    })

    nuxt.hook('nitro:init', (nitro) => {
      console.log('!!!!!', {
        preset: nitro.options.preset
      })
    })
  }
})
