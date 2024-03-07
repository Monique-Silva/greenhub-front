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
        this.store.addProductToCart(this.store.product)
    },

    components: {
        ProductCard,
        Breadcrumb
    }
}
</script>


<template>
    <Breadcrumb />
<div class="bg-gray-100 h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Panier</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <div>
                            <tr>
                                <div>
        </div class="flex items-center justify-center">
            <ProductCard :item="this.product" />
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">3,49 €</td>
                            </tr>
                            <!-- More product rows -->
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