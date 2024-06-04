// src/views/OrderView.vue
<script>
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';
import Breadcrumb from '../components/Breadcrumb.vue';
import AddressInput from '../components/AddressInput.vue';

export default {
  components: {
    Breadcrumb,
    AddressInput,
  },
  setup() {
    const userStore = useUserStore();
    const cartStore = useCartStore();

    onMounted(async () => {
      await userStore.fetchUser();
    });

    const cart = computed(() => cartStore.cart);
    const cartSubtotal = computed(() => cartStore.cartSubtotal);
    const cartTaxes = computed(() => cartStore.cartTaxes);
    const cartTotal = computed(() => cartStore.cartTotal);

    const user = computed(() => userStore.user);
    const address = computed(() => userStore.address);

    const submitOrder = async () => {
      try {
        await axios.post('/orders', {
          address: address.value,
          cart: cartStore.cart,
        });

        cartStore.clearCart();
      } catch (error) {
        console.error('Error placing order:', error);
      }
    };

    return {
      cart,
      cartSubtotal,
      cartTaxes,
      cartTotal,
      user,
      address,
      submitOrder,
    };
  },
};
</script>

<template>
  <div class="bg-amber-500/[0.6] container mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4 text-center">Order Confirmation</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-semibold mb-4">Commande</h2>
        <table class="w-full mb-4">
          <tbody>
            <tr v-for="item in cart" :key="item.id" class="border-b">
              <td><img :src="item.image" alt="product image" class="w-16 h-16"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.price.toFixed(2) }} €</td>
              <td>{{ item.quantity }}</td>
              <td class="font-medium">{{ (item.price * item.quantity).toFixed(2) }} €</td>
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
          <p>{{ address.number }}, {{ address.road }}, {{ address.city }}, {{ address.postalCode }}, {{ address.country }}</p>
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-lg w-full mb-4" @click="changeAddress = true">Changer Adresse</button>
        <div v-if="changeAddress">
          <AddressInput />
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-lg w-full" @click="submitOrder">Acheter</button>
      </div>
    </div>
  </div>
</template>
