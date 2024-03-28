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

    <div class="w-full max-w-xs">
        <form id="login" name="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="example@mail.fr" v-model="store.email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Mot de passe
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************" v-model="store.password">
                <p class="text-red-500 text-xs italic">Choisissez votre mot de passe, s'il vous plaît.</p>
            </div>
            <div class="flex items-center justify-between">
                <button v-on:click.prevent="store.login"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Login
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Mot de passe oublié?
                </a>
            </div>
        </form>

    </div>

</template>