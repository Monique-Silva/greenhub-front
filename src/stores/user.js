import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null,
            email: '',
            password: '',
            loading: false,
            error: null
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

        async login() {
            try {

                // Send login request and handle authentication token
                // Store token in local storage
                await axios.post('http://localhost:8000/login', {email: email.value, password: password.value});
            
        
            }
            catch (error) {
                console.log(error)
            };
        },
    },
})
