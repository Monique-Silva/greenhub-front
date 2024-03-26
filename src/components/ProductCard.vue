<script>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from '@/stores/product';

export default {
  data() {
    return {
      store: useProductStore()
    }
  },

  props: ["item"],
  components: {
    RouterLink
  },
}

</script>

<template>
  <div v-if="item" class="card w-96 bg-base-100 shadow-xl">
    <RouterLink :to="'/product/' + item.id">
      <figure><img :src="item.image" alt="product image"></figure>
    </RouterLink>
    <div class="card-body">
      <h3 class="card-title">{{ item.category }}</h3>
      <h2 class="card-title">{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <div class="card-actions justify-end">
        <h1>{{ item.price }}</h1>
        <button @click="store.addProductToCart(item)" class="btn btn-primary">AJOUTER</button>
      </div>
    </div>
  </div>
</template>
