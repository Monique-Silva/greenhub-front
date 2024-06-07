<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import AddressInput from '../components/AddressInput.vue';
import AddressView from '../components/AddressView.vue';
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';
import { useOrderStore } from '@/stores/order';
import { useAddressStore } from '@/stores/address';

export default {
  components: {
    Breadcrumb,
    AddressInput,
    AddressView
  },
  data() {
    return {
      changeAddress: false,
      userStore: useUserStore(),
      cartStore: useCartStore(),
      orderStore: useOrderStore(),
      addressStore: useAddressStore(),
    };
  },
  computed: {
    cart() {
      return this.cartStore.cart;
    },
    cartSubtotal() {
      return this.cartStore.cartSubtotal;
    },
    cartTaxes() {
      return this.cartStore.cartTaxes;
    },
    cartTotal() {
      return this.cartStore.cartTotal;
    },
    user() {
      return this.userStore.user;
    },
    address() {
      return this.addressStore.address;
    },
    order() {
      return this.orderStore.order;
    }
  },
  created() {
    this.userStore.fetchUser().then(() => {
      if (this.userStore.user) {
        this.address_id = this.userStore.user.address_id;
        this.addressStore.fetchUsersAddress(this.address_id).catch(error => {
          this.errorMessage = 'Failed to load address: ' + error.message;
          console.error('Error fetching address:', error);
        });
      }
    }).catch(error => {
      this.errorMessage = 'Failed to load user: ' + error.message;
      console.error('Error fetching user:', error);
    });
  },
  methods: {
    async submitOrder() {
      await this.orderStore.submitOrder();
    }
  }
};
</script>

<template>
  <div class="bg-amber-500/[0.6] container mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4 text-center">Confirmez votre commande :</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-semibold mb-4">Commande</h2>
        <table class="w-full mb-4">
          <thead>
            <tr>
              <th class="text-left font-semibold">Produits</th>
              <th class="text-right font-semibold">Prix</th>
              <th class="text-center font-semibold">Quantité</th>
              <th class="text-right font-semibold">Subtotal</th>
              <th></th> <!-- Add an empty th for the remove button -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id" class="border-b">
              <td>
                <div class="flex items-center">
                  <img :src="item.image" alt="product image" class="w-16 h-16 mr-2">
                  <span>{{ item.name }}</span>
                </div>
              </td>
              <td class="text-right">{{ item.price.toFixed(2) }} €</td>
              <td class="text-center">{{ item.quantity }}</td>
              <td class="text-right">{{ (item.price * item.quantity).toFixed(2) }} €</td>
            </tr>
          </tbody>
        </table>
        <div class="md:w-3/4 bg-white rounded-lg shadow-md p-6">
          <div class="flex justify-between mb-4">
            <span class="font-semibold">Subtotal:</span>
            <span>{{ cartSubtotal.toFixed(2) }} €</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="font-semibold">Taxes:</span>
            <span>{{ cartTaxes.toFixed(2) }} €</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="font-semibold">Total:</span>
            <span>{{ cartTotal.toFixed(2) }} €</span>
          </div>
        </div>
      </div>
      <div class="md:w-1/4 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-semibold mb-4">Adresse et mode de paiement</h2>
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nom :</label>
          <p>{{ user.first_name }} {{ user.last_name }}</p>
        </div>
        <div class="mb-4">
          <label for="address" class="block text-gray-700">Adresse :</label>
          <AddressView />
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-lg w-full mb-4" @click="changeAddress = true">
          Changer Adresse
        </button>
        <div v-if="changeAddress">
          <AddressInput />
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-lg w-full" @click="submitOrder">Acheter</button>
      </div>
    </div>
  </div>
</template>
