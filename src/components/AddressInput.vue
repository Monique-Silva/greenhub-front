<script>
import { defineComponent } from 'vue';
import { useAddressStore } from '@/stores/address';

export default defineComponent({
  name: 'AddressInput',
  data() {
    return {
      query: '',
    };
  },
  computed: {
    suggestions() {
      return this.addressStore.suggestions;
    },
  },
  methods: {
    fetchSuggestions() {
      this.addressStore.fetchAddressSuggestions(this.query);
    },
    selectSuggestion(suggestion) {
      this.addressStore.selectAddress(suggestion);
      this.query = `${suggestion.number}, ${suggestion.road}, ${suggestion.city}, ${suggestion.postal_code}, ${suggestion.country}`;
    },
  },
  created() {
    this.addressStore = useAddressStore();
  },
});
</script>

<template>
  <div>
    <input type="text" v-model="query" @input="fetchSuggestions" placeholder="Entrez votre adresse" />
    <ul v-if="suggestions.length">
      <li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectSuggestion(suggestion)">
        {{ suggestion.number }}, {{ suggestion.road }}, {{ suggestion.city }}, {{ suggestion.postal_code }}, {{ suggestion.country }}
      </li>
    </ul>
  </div>
</template>
