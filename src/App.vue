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
    <h1>test test</h1>
    <HelloWorld msg="test" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/category" @click="onCategoryClick">Catégorie</RouterLink>
        <RouterLink to="/product" @click="onProductClick">Product</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>