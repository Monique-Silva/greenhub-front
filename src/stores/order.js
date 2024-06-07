// src/stores/order.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('order', {
    state: () => ({
        address: '',
        paymentMethod: 'credit_card',
        orderDetails: null,
        error: null,
    }),

    actions: {

        async submitOrder(cart) {
            try {
                const response = await axios.post('/orders', {
                    address: this.address,
                    payment_method: this.paymentMethod,
                    cart: cart,
                });
                this.orderDetails = response.data;
                return response.data;
            } catch (error) {
                this.error = 'Error placing order';
                console.error('Error placing order:', error);
            }
        },
    },
});
