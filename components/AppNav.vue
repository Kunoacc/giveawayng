<template>
  <header class="w-full flex flex-row justify-between py-6">
    <img src="/logo.svg" class="h-16"/>
    <div class="grid grid-rows-1 grid-cols-3 col-gap-4 items-center">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/">Giveaways</nuxt-link>
      <nuxt-link to="login" class="bg-primary text-white px-8 py-2 rounded-lg">Login</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>