import { defineStore } from 'pinia';
import axios from 'axios';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        products: [],
        product: null,
        quantity: 0,
        cartProductCount: 0,
        loading: false,
        error: null,
        cartStorage: null,
    }),

    actions: {
        /*loadCart() {
            if (!localStorage.getItem('cart')) {
                this.cart = []
            } else {
                this.cart = JSON.parse(localStorage.getItem('cart'))
            }
        },*/

        //the function addProductToCart has a map function with product as parameter: it will check if the parameter id matches the item id. if true, it will stock the result in the variable, if false, it will call it null.
        //if the result variable length is true (meaning there's an object in the array result and the product added to cart is already in the cart), the quantity will raise +1. Otherwise, the quantity will be 1 and the item will be added to the array cart with the push function.

        addProductToCart(item) {
            let result = this.cart.filter((product) => product.id === item.id)
            console.log(result);
            if (result.length > 0) {
                this.cart.find((product) => product.id === item.id).quantity += 1;
                //localStorage.setItem('quantity', item.quantity)
                //localStorage.setItem('product', item)
            } else {
                item.quantity = 1
                //localStorage.setItem('quantity', item.quantity)
                this.cart.push(item)
            }

        },

        fetchCartProducts() {

            return this.cart
        }
    },

    getters: {
        //this function will add the product quantity in the shopping cart badge. At the moment it doens not work, because it will need to access the item.quantity with a loop (we can use the map method) to add to the cart. This still needs to be implemented at home.
        displayNumberOfProductsOnCart() {
            let cartProductCount = null;
            this.cart.forEach(product => {
                cartProductCount = + item.quantity
            });
            return cartProductCount;
        }
    }

})