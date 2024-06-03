<script>
import ProductCard from '../components/ProductCard.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { useProductStore } from '@/stores/product'

export default {
    data() {
        return {
            store: useProductStore()
        }
    },

    created() {
        this.store.fetchAllProducts()
    },

    components: {
        ProductCard,
        Breadcrumb
    }
}
</script>

<template>
    <Breadcrumb />
    <h1 class="products text-center">Tous les produits</h1>
    <div class="container mx-auto px-4">
        <div class="all-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            <div class="product-card flex" v-for="item in store.products" :key="item.id">
                <ProductCard :item="item" class="flex flex-col h-full" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.products {
  text-align: center;
  margin-bottom: 20px;
}
.all-cards {
  padding: 20px;
}
.product-card {
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  margin: 10px;
}
.container {
  max-width: 1440px; /* Matches a 12" screen width */
}
</style>