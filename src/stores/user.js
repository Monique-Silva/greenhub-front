import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router'


export const useUserStore = defineStore('user', {
    state: () => ({
        user_name: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        address: {
            number: '',
            road: '',
            city: '',
            postalCode: '',
            country: 'France'
        },
        suggestions: [],
        loading: false,
        error: null,
        role: 'client',
        remember_token: '',
        company_id: '',
        image_id: '',
        is_logged_in: null,
        user: null,
    }),

    actions: {

        async fetchUser() {
            try {
                const response = await axios.get("http://localhost:8000/user");
                this.user = response.data
                this.is_logged_in = true;
            }
            catch (error) {
                console.error('Erreur lors de la récupération de l\'utilisateur:', error);
            }
        },

        async login() {
            try {
                axios.get('/sanctum/csrf-cookie');
                const response = await axios.post("http://localhost:8000/login", {
                    email: this.email,
                    password: this.password
                });
                this.user = response.data
                this.is_logged_in = true;

                router.push({ path: '/user' });
            }
            catch (error) {
                console.error('Erreur lors de la connexion:', error);
            };
        },

        async logout() {
            try {
                await axios.post("http://localhost:8000/logout");
                this.is_logged_in = false;
                this.user = null;
                router.push({ path: '/' });
            }
            catch (error) {
                console.error('Erreur lors de la déconnexion:', error);
            };
        },

        async fetchAddressSuggestions(query) {
            if (query.length > 2) {
                try {
                    const response = await axios.get(
                        `/api/search/?q=${query}&limit=5&type=housenumber`
                    );
                    this.suggestions = response.data.features.map(feature => ({
                        id: feature.properties.id,
                        number: feature.properties.housenumber || '',
                        road: feature.properties.street || '',
                        city: feature.properties.city || '',
                        postalCode: feature.properties.postcode || '',
                        country: 'France'
                    }));
                } catch (error) {
                    console.error('Erreur lors de la récupération des suggestions d\'adresse:', error);
                }
            } else {
                this.suggestions = [];
            }
        },
        selectAddress(suggestion) {
            this.address = suggestion;
            this.suggestions = [];
        },

        async registerNewClient() {
            try {
                const response = await axios.post("http://localhost:8000/register", {
                    user_name: this.user_name,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    address: {
                        number: this.address.number,
                        road: this.address.road,
                        postal_code: this.address.postalCode,
                        city: this.address.city,
                        country: this.address.country
                    },
                });
                console.log('Utilisateur enregistré:', response.data);
                this.user = response.data;
                this.is_logged_in = true;
                router.push({ path: '/user' });
            }
            catch (error) {
                if (error.response && error.response.status === 422) {
                    console.error('Erreur de validation:', error.response.data.errors);
                } else {
                    console.error('Erreur lors de l\'enregistrement:', error);
                }
            };
        },
        /* cette function a été probablement crée pour permettre denregistrer tous les types de roles
                async registerNewUser() {
                    try {
                        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
                        await axios.post("http://localhost:8000/register", {
                            user_name: this.user_name,
                            first_name: this.first_name,
                            last_name: this.last_name,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation,
                            address: this.address,
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
                */

    },
});