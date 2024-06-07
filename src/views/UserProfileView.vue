<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import { useUserStore } from '@/stores/user';
import { useAddressStore } from '@/stores/address';
import NewUserView from './NewUserView.vue';
import AddressView from '../components/AddressView.vue';

export default {
    components: {
        Breadcrumb,
        NewUserView,
        AddressView,
    },
    data() {
        return {
            userStore: useUserStore(),
            addressStore: useAddressStore(),
            address_id: null,
            errorMessage: ''
        };
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
    computed: {
        user() {
            return this.userStore.user;
        },
        address() {
            return this.addressStore.address;
        },
        isLoggedIn() {
            return this.userStore.isLoggedIn;
        }
    },
};
</script>

<template>
    <div>
        <Breadcrumb />
        <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
        <div v-if="isLoggedIn" class="card w-96 bg-base-100 shadow-xl">
            <p class="flex justify-center">Bienvenue {{ user.user_name }}</p>
            <figure><img :src="user.image_id" alt="user avatar"></figure>
            <div class="card-body">
                <h3 class="card-title">{{ user.first_name }}</h3>
                <h2 class="card-title">{{ user.last_name }}</h2>
                <p>Email : {{ user.email }}</p>
                <h4 class="card-title">Adresse : {{ address ? `${address.number} ${address.road}, ${address.city}, ${address.postal_code}, ${address.country}` : 'No address available' }}</h4>

                <router-link to="/allproducts" class="bg-primary text-white text-center font-bold py-2 px-4 rounded-lg mt-4 w-full">
                    Commencer mes achats
                </router-link>
                <router-link to="/cart" class="bg-primary text-white text-center font-bold py-2 px-4 rounded-lg mt-4 w-full">
                    Voir mon panier
                </router-link>
            </div>
        </div>
        <div v-else>
            <NewUserView />
        </div>
    </div>
</template>

<style scoped>
.error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 1rem;
}
</style>
