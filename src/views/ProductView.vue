<script>
import ProductCard from '../components/ProductCard.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import axios from 'axios';

export default {
    data() {
        return {
            product: null,
            loading: false,
            error: null,
        }

            /* results made "by hand"
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
*/
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/${item.id}');
                this.product = response.data
                console.log(this.product)
            }
            catch (error) {
                console.log(error)
            };
        },
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
        </div>
            <ProductCard :item="product" />
    </template>