import { defineStore } from 'pinia';
import axios from 'axios';

export const useAddressStore = defineStore('address', {
  state: () => ({
    address: null,
    suggestions: [],
    loading: false,
    error: null
  }),
  getters: {
    getAddress(state) {
      return state.address;
    }
  },
  actions: {
    async fetchAddressSuggestions(query) {
      if (query.length > 2) {
        try {
          const response = await axios.get(`/api/search/?q=${query}&limit=5&type=housenumber`);
          this.suggestions = response.data.features.map((feature) => ({
            id: feature.properties.id,
            number: feature.properties.housenumber || '',
            road: feature.properties.street || '',
            city: feature.properties.city || '',
            postal_code: feature.properties.postcode || '',
            country: 'France',
          }));
        } catch (error) {
          console.error('Error fetching address suggestions:', error);
        }
      } else {
        this.suggestions = [];
      }
    },
    selectAddress(suggestion) {
      this.address = suggestion;
      this.suggestions = [];
    },
    async fetchUsersAddress(address_id) {
      try {
        console.log('Fetching address for ID:', address_id); // Debugging log
        const response = await axios.get(`http://localhost:8000/user/address/${address_id}`);
        console.log('Address fetched:', response.data); // Debugging log
        this.address = response.data;
        return this.address;
      } catch (error) {
        console.error('Error fetching user address:', error);
        throw error;
      }
    }
  }
});