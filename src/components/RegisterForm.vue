<!-- src/components/RegisterForm.vue -->
<template>
    <form @submit.prevent="register">
      <div>
        <label for="name">Nom</label>
        <input type="text" v-model="name" id="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required>
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" id="password" required>
      </div>
      <div>
        <label for="address">Adresse</label>
        <address-input></address-input>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user';
  import AddressInput from './AddressInput.vue';
  
  export default {
    components: {
      AddressInput
    },
    setup() {
      const userStore = useUserStore();
      const name = ref('');
      const email = ref('');
      const password = ref('');
  
      const register = () => {
        userStore.registerUser({
          name: name.value,
          email: email.value,
          password: password.value,
          address: userStore.address
        });
      };
  
      return {
        name,
        email,
        password,
        register
      };
    }
  };
  </script>
  


<template>
  <div>
    <Combobox v-model="fetchSuggestions">
    <ComboboxInput type="text" placeholder="adresse" @change="query = $event.target.value" />
    <ComboboxOptions>
      <ComboboxOption
        v-for="suggestion in selectSuggestion"
        :key="suggestion"
        :value="suggestion"
      >
        {{ suggestion }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
  </div>
</template>