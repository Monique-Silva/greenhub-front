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

        addProductToCart(product) {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/" + itemId);
                this.cart = + response.data;
            }
            catch (error) {
                this.error = error
            };
        },
    },
})