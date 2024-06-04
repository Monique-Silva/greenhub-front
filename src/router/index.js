
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductView from '@/views/ProductView.vue'
import AllProductsView from '@/views/AllProductsView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/LoginView.vue'
import NewUserView from '@/views/NewUserView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import LogoutView from '@/views/LogoutView.vue'
import OrderView from '@/views/OrderView.vue'

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
            path: '/register',
            name: 'newUser',
            component: NewUserView
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
        {
            path: '/logout',
            name: 'logout',
            component: LogoutView
        },
        {
            path: '/user',
            name: 'userProfile',
            component: UserProfileView
        },
        {
            path: '/order',
            name: 'order',
            component: OrderView
        },
    ]
})

export default router