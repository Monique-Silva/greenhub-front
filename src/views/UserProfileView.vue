<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useUserStore } from '@/stores/user'

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
        Breadcrumb
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
            <p>{{ this.user.email }}</p>
        </div>
    </div>
</template>