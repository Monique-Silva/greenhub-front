import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            products: [],
            categories: [],
            cart: [],
            product: null,
            loading: false,
            error: null
        }
    },

    actions: {

        async fetchAllProducts() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                this.products = response.data
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductsByCategory(category) {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/" + category);
                this.products = response.data
                //console.log(this.products)
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductById(itemId) {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/" + itemId);
                this.product = response.data
            }
            catch (error) {
                this.error = error
            };
        },

        addProductToCart(item) {
            if (this.item.id in this.cart) {
                this.item.quantity = +1
            } else {
                this.cart.push(item)
                this.item.quantity = 1
            }
            console.log(this.quantity)
        },

        fetchCartProducts() {
            return this.cart
        }
    },
    getters: {
        displayCartLength() {
            return this.cart.length
        }
    }
})