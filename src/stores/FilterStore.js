import { defineStore } from 'pinia';

export const useFilterStore = defineStore('products', {
    state: () => {
        return {
            products: [],
        }
    },
    getters: {
        getItemById: (state) => {
            return (itemId) => state.products.find((item) => item.id === itemId)
        },
        getItemsByCategory: (state) => {
            return (itemCategory) => state.products.filter((item) => item.category === itemCategory)
        },
    },
})