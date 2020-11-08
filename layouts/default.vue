<template>
  <div class="flex flex-col flex-grow h-screen w-full container">
    <AppNav />
    <div class="flex flex-grow">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default defineComponent({
  head: {
    title: 'Giveaway NG | Run giveaways easily in Nigeria!',
    meta: [
      { charset: 'UTF-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Giveaway NG Homepage"
      }
    ]
  },
  components: {
    AppNav, AppFooter
  }
})
</script>
