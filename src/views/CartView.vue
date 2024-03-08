<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useProductStore } from '@/stores/product'
import ShoppingCartProduct from '../components/ShoppingCartProduct.vue'

export default {
    data() {
        return {
            store: useProductStore()
        }
    },
    created() {
        this.store.fetchCartProducts()
    },

    components: {
        ShoppingCartProduct,
        Breadcrumb
    }
}
</script>


<template>
    <Breadcrumb />
    <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-2xl font-semibold mb-4">Panier</h1>
            <div class="flex sm:flex-col md:flex-row gap-4">
                <div class="md:w-3/4">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                        <table class="w-full">
                            <div class="flex items-center justify-center flex flex-row">
                            </div>
                            <div v-for="item in this.store.cart" :key="item.id">
                                <ShoppingCartProduct :item="item" />
                            </div>
                        </table>
                    </div>
                </div>
                <div class="md:w-1/4">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-lg font-semibold mb-4">Recapitulatif</h2>
                        <div class="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>300 €</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>TTC</span>
                            <span>1,99 €</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Livraison</span>
                            <span>0,00 €</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">3,49 €</span>
                        </div>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Acheter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>