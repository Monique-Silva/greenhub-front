<script>
import { defineComponent } from 'vue';
import { useAddressStore } from '@/stores/address';
import { useUserStore } from '@/stores/user';

export default defineComponent({
    name: 'AddressView',
    data() {
        return {
            addressStore: useAddressStore(),
            userStore: useUserStore(),
        };
    },
    computed: {
        address() {
            return this.userStore.user ? this.addressStore.address : null;
        },
    },
});
</script>

<template>
    <div v-if="address">
        <p>{{ address.number }}, {{ address.road }}</p>
        <p>{{ address.city }}, {{ address.postal_code }}</p>
        <p>{{ address.country }}</p>
    </div>
    <div v-else>
        <p>No address available.</p>
    </div>
</template>
