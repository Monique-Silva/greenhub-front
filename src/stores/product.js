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
            this.loading = true; // Optional: Add a loading state
            this.error = null;   // Optional: Add an error state

            try {
                const response = await axios.get(`http://localhost:8000/products/categories/${categoryName}`);
                if (response.data.error) {
                    this.error = response.data.error; // Set the error message from the response
                    this.products = []; // Clear the products list if there's an error
                } else {
                    this.products = response.data; // Set the products data if no error
                }
            } catch (error) {
                this.error = "An error occurred while fetching products."; // Set a generic error message
                console.error("Error fetching products:", error); // Log the detailed error to the console
            } finally {
                this.loading = false; // End the loading state
            }
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