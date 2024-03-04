<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {};
  },
  methods: {
    onProductClick() {
    }
  },
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  }
}
</script>


<template>
  <header>
    <h1>test test</h1>
    <HelloWorld msg="test" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/category" @click="onCategoryClick">Catégorie</RouterLink>
        <RouterLink to="/product" @click="onProductClick">Product Details</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>