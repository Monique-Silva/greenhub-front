import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router'


export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null,
            user_name: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            loading: false,
            error: null,
            role: 'client',
            remember_token: '',
            company_id: '',
            image_id: '',
            is_logged_in: null,
        }
    },

    actions: {

        async fetchUser() {
            try {
                const response = await axios.get("http://localhost:8000/api/user");
                this.user = response.data
                this.is_logged_in = true;
            }
            catch (error) {
                console.log(error)
            };
        },

        async login() {
            try {
                axios.get('/sanctum/csrf-cookie');
                const response = await axios.post('http://localhost:8000/login', { email: this.email, password: this.password });
                this.user = response.data
                this.is_logged_in = true;

                router.push({ path: '/user' });
            }
            catch (error) {
                console.log(error)
            };
        },

        async logout() {
            try {
                await axios.post('http://localhost:8000/logout');
                this.is_logged_in = false;
                router.push({ path: '/' });
            }
            catch (error) {
                console.log(error)
            };
        },

        async registerNewUser() {
            try {
                const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
                await axios.post('http://localhost:8000/register', {
                    user_name: this.user_name,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    role: this.role
                }, {
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    }
                });
            }
            catch (error) {
                console.log(error)
            };
        },
    },
})
