
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductCard from '../components/ProductCard.vue'
import CategoryView from '@/views/CategoryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/category',
            name: 'category',
            component: CategoryView
        },
        {
            path: '/product',
            name: 'product',
            component: ProductCard
        },
    ]
})

export default router