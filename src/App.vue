<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Icon } from '@iconify/vue';
import Navbar from './components/Navbar.vue'


export default {
  data() {
    return {};
  },

  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    Navbar
  }
}
</script>


<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>