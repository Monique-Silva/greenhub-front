<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useUserStore } from '@/stores/user'
import NewUserView from './NewUserView.vue';

export default {
    data() {
        // Référence au store Pinia
        const userStore = useUserStore();
        return {
            userStore
        }
    },

    computed: {
        user() {
            // Utilisez la référence stockée dans data
            this.userStore = useUserStore();
            return this.userStore.user;
        }
    },


    created() {
        this.userStore = useUserStore();
        this.userStore.fetchUser();
    },

    components: {
        Breadcrumb,
        NewUserView
    }
}

</script>

<template>
    <div>
        <Breadcrumb />
    </div>
    <div v-if="user" class="card w-96 bg-base-100 shadow-xl">
        <p class="flex justify-center"> Bienvenue {{ this.user.user_name }}</p>
        <figure><img :src="this.user.image_id" alt="user avatar"></figure>
        <div class="card-body">
            <h3 class="card-title">{{ this.user.first_name }}</h3>
            <h2 class="card-title">{{ this.user.last_name }}</h2>
            <p>Email : {{ this.user.email }}</p>
            <h4 class="card-title">Adresse : {{ this.user.address }}</h4>


            <router-link to="/allproducts"
                class="bg-primary text-white text-center font-bold py-2 px-4 rounded-lg mt-4 w-full">
                Commencer mes achats
            </router-link>
            <router-link to="/cart"
                class="bg-primary text-white text-center font-bold py-2 px-4 rounded-lg mt-4 w-full">
                Voir mon panier
            </router-link>
        </div>
    </div>
    <div v-else>
        <NewUserView />
    </div>
</template>