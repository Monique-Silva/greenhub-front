<script>
import ProductCard from '../components/ProductCard.vue'

export default {
    data() {
        return {
            products:
                    {
                    id: 1,
                    img: "/src/assets/images/coffee.png",
                    brand: "DESTINATION",
                    productTitle: "Café bio - 500 g",
                    pricePerMesure: 5.78,
                    mesure: "kg",
                    priceBeforeDiscount: 3.65,
                    discount: 10,
                    priceAfterDiscount: 2.89
                    },
        }
    },

    components: {
        ProductCard
    }
}
</script>

<template>
    <div>
        <p>header</p>
        <p>breadcrumb</p>
        <template v-for="item in products" :key="item.productTitle">
            <ProductCard :item="item" />
        </template>
    </div>
    </template>