import { defineStore } from 'pinia';
import router from '@/router';

// Utility function to round numbers to 2 decimal places
const roundToTwoDecimals = (num) => {
    return Math.round(num * 100) / 100;
};

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        taxRate: 0.20, // Example tax rate of 20%
        deliveryPrice: 5.00, // Example delivery price
    }),

    actions: {
        addProductToCart(item) {
            let product = this.cart.find(product => product.id === item.id);
            if (product) {
                product.quantity += 1;
            } else {
                item.quantity = 1;
                this.cart.push(item);
            }
            this.saveCartToLocalStorage();
        },

        incrementProductQuantity(itemId) {
            let product = this.cart.find(product => product.id === itemId);
            if (product) {
                product.quantity += 1;
                this.saveCartToLocalStorage();
            }
        },

        decrementProductQuantity(itemId) {
            let product = this.cart.find(product => product.id === itemId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else {
                this.cart = this.cart.filter(product => product.id !== itemId);
            }
            this.saveCartToLocalStorage();
        },

        removeProductFromCart(itemId) {
            this.cart = this.cart.filter(product => product.id !== itemId);
            this.saveCartToLocalStorage();
        },

        saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },

        loadCartFromLocalStorage() {
            this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        },

        clearLocalStorage() {
            localStorage.removeItem('cart'); // Remove cart data from local storage
        },

        clearCart() {
            this.cart = [];
            this.saveCartToLocalStorage();
            this.clearLocalStorage();
            router.push({ path: '/cart' });
        },
    },

    getters: {
        cartProductCount(state) {
            return state.cart.reduce((acc, product) => acc + product.quantity, 0);
        },

        cartSubtotal(state) {
            const subtotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
            return roundToTwoDecimals(subtotal);
        },

        cartTaxes(state) {
            const taxes = state.cartSubtotal * state.taxRate;
            return roundToTwoDecimals(taxes);
        },

        cartTotal(state) {
            const total = state.cartSubtotal + state.cartTaxes + state.deliveryPrice;
            return roundToTwoDecimals(total);
        }
    }
});
