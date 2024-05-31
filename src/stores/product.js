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
                const response = await axios.get("http://localhost:8000/products");
                this.products = response.data
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductsByCategory(categoryName) {

            try {
                const response = await axios.get("http://localhost:8000/products/categories/" + categoryName);
                this.products = response.data
                //console.log(this.products)
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductById(itemId) {
            try {
                const response = await axios.get("http://localhost:8000/products/" + itemId);
                this.product = response.data
                console.log(this.product)
            }
            catch (error) {
                this.error = error
            };
        },
    },
})