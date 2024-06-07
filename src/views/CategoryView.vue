<script>
import ProductCard from '../components/ProductCard.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import { useProductStore } from '@/stores/product';

export default {
  components: {
    ProductCard,
    Breadcrumb
  },
  data() {
    return {
      store: useProductStore()
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route.params.categoryName': 'fetchData'
  },
  methods: {
    fetchData() {
      this.store.fetchProductsByCategory(this.$route.params.categoryName);
    }
  }
};
</script>

<template>
  <div>
    <Breadcrumb />
    <h1 class="products">Catégorie</h1>
    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error">{{ store.error }}</div>
    <div v-if="!store.loading && !store.error && store.products.length">
      <div v-for="item in store.products" :key="item.id">
        <ProductCard :item="item" />
      </div>
    </div>
    <div v-else-if="!store.loading && !store.error">No products found.</div>
  </div>
</template>
