<script>
import Hero from '@/components/Hero.vue'
import { useUserStore } from '@/stores/user'


export default {
  data() {
    return {
      userStore: useUserStore(),
    }
  },

  props: ["item"],

  components: {
    Hero
  }
}
</script>

<template>
  <main>
    <Hero />
  </main>
</template>

<style>
.mainPhrase {
  font-style: oblique;
  text-align: center;
}

@media (min-width: 1024px) {
  .map {
    display: flex;
    align-items: center;
  }
}
</style>