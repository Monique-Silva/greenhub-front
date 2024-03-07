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
        this.store.fetchProductById(this.$route.params.itemId)
    },

    components: {
        ProductCard,
        Breadcrumb
    }
}
</script>

<template>
        <div>
            <Breadcrumb />
        </div class="flex items-center justify-center">
            <ProductCard :item="this.product" />
    </template>