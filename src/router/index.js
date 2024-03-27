
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductView from '@/views/ProductView.vue'
import AllProductsView from '@/views/AllProductsView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/allproducts',
            name: 'allProducts',
            component: AllProductsView
        },
        {
            path: '/product/:itemId',
            name: 'product',
            component: ProductView
        },
        {
            path: '/category/:categoryName',
            name: 'category',
            component: CategoryView
        },
        {
            //path: '/inscription',
            //name: 'newAccount',
            //component: NewAccountView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
    ]
})

export default router