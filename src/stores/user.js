import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: '',
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            loading: false,
            error: null,
            role: 'client',
            rememberToken: '',
            companyId: '',
            imageId: '',
        }
    },

    actions: {

        async fetchUser() {
            try {
                const response = await axios.get('http://localhost:8000/user');
                this.user = response.data
            }
            catch (error) {
                console.log(error)
            };
        },

        login() {
            try {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('http://localhost:8000/login', { email: this.email, password: this.password })
                    console.log('hey')
                });
            }
            catch (error) {
                console.log(error);
            }
        },

        async registerNewUser() {
            try {
                const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
                await axios.post('http://localhost:8000/register', {
                    user_name: this.userName,
                    first_name: this.firstName,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
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
