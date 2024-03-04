<script>
import ProductCard from '../components/ProductCard.vue'

export default {
    data() {
        return {
            products: [
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
                    {
                    id: 2,
                    img: "/src/assets/images/logo_greenhub.png.png",
                    brand: "LAVAZZA BIO",
                    productTitle: "Café bio - 300 g",
                    pricePerMesure: 3.45,
                    mesure: "kg",
                    priceBeforeDiscount: 2.35,
                    discount: 5,
                    priceAfterDiscount: 2.00
                    },
            ],
        }
    },

    components: {
        ProductCard
    }
}
</script>

<template>
    <div>
        <h1 class="products">Catégorie</h1>
        <template v-for="item in products" :key="item.productTitle">
            <ProductCard :item="item" />
        </template>
    </div>
    </template>