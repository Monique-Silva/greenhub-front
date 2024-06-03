<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useCartStore } from '@/stores/cart'
import { onMounted, computed } from 'vue';


export default {
    components: {
        Breadcrumb,
    },

    setup() {
        const cartStore = useCartStore();

        // Load cart from local storage on component mount
        cartStore.loadCartFromLocalStorage();

        const incrementQuantity = (itemId) => {
            cartStore.incrementProductQuantity(itemId);
        };

        const decrementQuantity = (itemId) => {
            cartStore.decrementProductQuantity(itemId);
        };

        const clearCart = () => {
            cartStore.clearCart();
        };

        onMounted(() => {
            cartStore.loadCartFromLocalStorage();
        });

        const cart = computed(() => cartStore.cart);
        const cartSubtotal = computed(() => cartStore.cartSubtotal);
        const cartTaxes = computed(() => cartStore.cartTaxes);
        const cartTotal = computed(() => cartStore.cartTotal);
        const deliveryPrice = computed(() => cartStore.deliveryPrice);
        const removeFromCart = computed(() => cartStore.removeProductFromCart);


        return {
            cart,
            cartSubtotal,
            cartTaxes,
            cartTotal,
            deliveryPrice,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            clearCart,
        };
    },
}
</script>

<template>
    <Breadcrumb />
    <div class="flex bg-amber-500/[0.6] h-screen py-8">
        <div class="container mx-auto px-4 flex flex-col items-center">
            <h1 class="text-2xl font-semibold mb-4 text-center">Panier</h1>
            <div v-if="cart.length === 0" class="text-center w-full">
                <div class="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6 mb-4 product-cart-container">
                    <h3 class="text-2xl font-semibold mb-4">Votre panier est vide =(</h3>
                    <router-link to="/allproducts" class="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
                        Commencer mes achats
                    </router-link>
                </div>
            </div>
            <div v-else class="flex flex-wrap justify-between w-full">
                <div class="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6 mb-4 product-cart-container">
                    <table class="w-full">
                        <tbody>
                            <tr v-for="item in cart" :key="item.id" class="border-b">
                                <td><img :src="item.image" alt="product image" class="w-16 h-16"></td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.price.toFixed(2) }} €</td>
                                <td>
                                    <button class="btn btn-primary text-white mx-2" @click="decrementQuantity(item.id)">-</button>
                                    {{ item.quantity }}
                                    <button class="btn btn-primary text-white mx-2" @click="incrementQuantity(item.id)">+</button>
                                </td>
                                <td class="font-medium">{{ (item.price * item.quantity).toFixed(2) }} €</td>
                                <td>
                                    <button class="btn btn-primary text-white" @click="removeFromCart(item.id)">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex justify-center mt-4">
                        <button class="bg-white text-primary py-2 px-4 rounded-lg mt-4" @click="clearCart">Vider panier</button>
                    </div>
                </div>
                <div class="w-full md:w-1/4 product-cart-recap bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Recapitulatif</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{{ cartSubtotal.toFixed(2) }} €</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>TTC</span>
                        <span>{{ cartTaxes.toFixed(2) }} €</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Livraison</span>
                        <span>{{ deliveryPrice.toFixed(2) }} €</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">{{ cartTotal.toFixed(2) }} €</span>
                    </div>
                    <button class="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">Commander</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-cart-container {
    max-width: 70%;
}

.product-cart-recap {
    max-width: 25%;
}

.product-cart-card {
    margin: 50px;
    padding: 10px;
    border-color: black;
    border-bottom: solid 1px;
}
</style>



<style scoped>
h3 {
    font-size: 20px;
}

.product-cart-container {
    max-width: 70%;
}

.product-cart-recap {
    max-width: 25%;
}

.product-cart-card {
    margin: 50px;
    padding: 10px;
    border-color: black;
    border-bottom: solid 1px;
}
</style>
