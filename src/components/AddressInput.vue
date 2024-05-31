<script>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const userStore = useUserStore();
    const query = ref('');

    const fetchSuggestions = () => {
      userStore.fetchAddressSuggestions(query.value);
    };

    const selectSuggestion = (suggestion) => {
      userStore.selectAddress(suggestion);
      query.value = `${suggestion.number}, ${suggestion.road}, ${suggestion.city}, ${suggestion.postalCode}, ${suggestion.country}`;
    };

    const suggestions = computed(() => userStore.suggestions);

    return {
      query,
      suggestions,
      fetchSuggestions,
      selectSuggestion,
    };
  },
};
</script>


<template>
  <div>
    <input type="text" v-model="query" @input="fetchSuggestions" placeholder="Entrez votre adresse" />
    <ul v-if="suggestions.length">
      <li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectSuggestion(suggestion)">
        {{ suggestion.number }}, {{ suggestion.road }}, {{ suggestion.city }}, {{ suggestion.postalCode }}, {{
          suggestion.country }}
      </li>
    </ul>
  </div>
</template>
