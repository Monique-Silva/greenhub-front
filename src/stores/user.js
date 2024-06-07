import { defineStore } from 'pinia';
import axios from 'axios';
import { useAddressStore } from '@/stores/address';  // Import the address store
import router from '@/router'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        is_logged_in: false,
        error: null,
    }),
    getters: {
        userInfo(state) {
            return state.user;
        },
        isLoggedIn(state) {
            return state.is_logged_in;
        }
    },

    actions: {

        async fetchUser() {
            try {
                const responseUser = await axios.get('http://localhost:8000/user');
                this.user = responseUser.data;
                this.is_logged_in = true;
            } catch (error) {
                this.error = 'Error fetching user data';
                console.error('Error fetching user data:', error);
            }
        },

        async login() {
            try {
                await axios.get('/sanctum/csrf-cookie');
                const response = await axios.post('http://localhost:8000/login', {
                    email: this.email,
                    password: this.password,
                });
                this.user = response.data;
                console.log(response.data);
                this.is_logged_in = true;
                router.push({ path: '/user' });
            } catch (error) {
                console.error('Erreur lors de la connexion:', error);
            };
        },


        async logout() {
            try {
                await axios.post('http://localhost:8000/logout');
                this.is_logged_in = false;
                this.user = null;
                router.push({ path: '/' });
            } catch (error) {
                console.error('Erreur lors de la déconnexion:', error);
            }
        },

        async registerNewClient(userData) {
            try {
                const response = await axios.post('http://localhost:8000/register', userData);
                this.user = response.data;
                this.is_logged_in = true;
                router.push({ path: '/user' });
                if (this.user.address_id) {
                    const addressStore = useAddressStore();
                    await addressStore.fetchUsersAddress(this.user.address_id);
                }
            } catch (error) {
                this.error = 'Error registering new client';
                console.error('Error registering new client:', error);
            }
        },
    },
});
