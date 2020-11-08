<template>
  <div class="flex flex-row justify-between py-10">
    <p class="flex items-center">Copyright &copy; {{date.getFullYear()}}</p>
    <div class="flex flex-row items-center">
      <span class="px-2 text-xl">🌞</span>
      <AppToggle name="theme_toggle" v-model="theme" val="true"></AppToggle>
      <span class="px-2 text-xl">🌚</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import AppToggle from '~/components/AppToggle.vue'

export default defineComponent({
  components: {
    AppToggle
  },
  setup(){
    const date = ref(new Date())
    const theme = ref([])

    return { date, theme }
  }
})
</script>