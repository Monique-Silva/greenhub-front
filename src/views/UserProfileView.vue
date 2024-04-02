<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useUserStore } from '@/stores/user'

export default {
    data() {
        return {
            store: useUserStore()
        }
    },

    created() {
        this.store.fetchUser()
    },

    props: ["item"],
    components: {
        Breadcrumb
    }
}

</script>

<template>
    <div>
        <Breadcrumb />
    </div>
    <div v-if="item" class="card w-96 bg-base-100 shadow-xl">
        <p class="flex justify-center"> Bienvenue {{ item.userName }}</p>
        <figure><img :src="item.imageId" alt="user avatar"></figure>
        <div class="card-body">
            <h3 class="card-title">{{ item.firstName }}</h3>
            <h2 class="card-title">{{ item.lastName }}</h2>
            <p>{{ item.email }}</p>
        </div>
    </div>
</template>