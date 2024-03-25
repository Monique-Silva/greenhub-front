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
                const response = await axios.get('http://localhost:8000/api/products');
                this.products = response.data
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductsByCategory(category) {
            try {
                const response = await axios.get("http://localhost:8000/api/products/categories");
                this.products = response.data
                //console.log(this.products)
            }
            catch (error) {
                console.log(error)
            };
        },

        async fetchProductById(itemId) {
            try {
                const response = await axios.get("http://localhost:8000/api/products/" + itemId);
                this.product = response.data
            }
            catch (error) {
                this.error = error
            };
        },
        //the function addProductTo Cart has a map function with product as parameter: it will check if the parameter id matches the item id. if true, it will stock the result in the variable, if false, it will call it null.
        //if the result variable length is true (meaning there's an object in the array result and the product added to cart is already in the cart), the quantity will raise +1. Otherwise, the quantity will be 1 and the item will be added to the array cart with the push function. 
        addProductToCart(item) {
            let result = this.cart.map((product) => product.id === item.id ? product.id : null)
            if (result.length) {
                item.quantity++
            } else {
                item.quantity = 1
                this.cart.push(item)
            }
        },

        fetchCartProducts() {
            return this.cart
        }
    },
    /*
    getters: {
        //this function will add the product quantity in the shopping cart badge. At the moment it doens not work, because it will need to access the item.quantity with a loop (we can use the map method) to add to the cart. This still needs to be implemented at home.
        displayNumberOfProductsOnCart() {
            let cartProductCount = null
            cart.forEach(product => {
                cartProductCount = + item.quantity
            });
            return this.cartProductCount
        }
    }
    */
})