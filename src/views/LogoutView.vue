<script>
import { useUserStore } from '@/stores/user'

export default {
    data() {
        return {
            store: useUserStore()
        }
    },
}
</script>

<template>
    <p>Vous êtes déconnecté.e</p>
</template>