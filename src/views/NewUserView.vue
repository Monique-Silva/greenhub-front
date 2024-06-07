<script>
import { useUserStore } from '@/stores/user';
import { useAddressStore } from '@/stores/address';
import AddressInput from '@/components/AddressInput.vue';
import { useCartStore } from '@/stores/cart';

export default {
  components: {
    AddressInput,
  },
  data() {
    return {
      cartStore: useCartStore(),
      addressStore: useAddressStore(),
      userStore: useUserStore(),
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.userStore.registerNewClient();
        console.log('Utilisateur enregistré:', response.data);
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="register" id="register" name="register">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 pb-6 lg:px-8 pb-8">
      <h2>Créer un compte</h2>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" class="grow" placeholder="Nom d'utilisateur" v-model="userStore.user_name" id="user_name"
          required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <input type="text" class="grow" placeholder="Prénom" v-model="userStore.first_name" id="first_name" required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <input type="text" class="grow" placeholder="Nom" v-model="userStore.last_name" id="last_name" required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <input type="email" class="grow" placeholder="E-mail" v-model="userStore.email" id="email" required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <input type="password" class="grow" placeholder="Mot de passe" v-model="userStore.password" id="password"
          required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <input type="password" class="grow" placeholder="Confirmez le mot de passe"
          v-model="userStore.password_confirmation" id="password_confirmation" required>
      </label>
      <label class="input input-bordered flex items-center gap-2 m-8">
        <AddressInput />
      </label>
    </div>
    <div class="flex items-center gap-2 m-8">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-items-center"
        type="submit">
        Envoyer
      </button>
    </div>
  </form>
</template>
