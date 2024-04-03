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
    <template>
        <Breadcrumb />
    </template>
    <div>
        <h1 class="products">Tous les produits</h1>
        <div v-for="item in this.store.products" :key="item.id">
            <ProductCard :item="item" />
        </div>
    </div>
</template>