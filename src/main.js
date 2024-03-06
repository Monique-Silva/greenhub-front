import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useFilterStore } from '@/stores/FilterStore'

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia)


app.mount('#app')

const filterStore = useFilterStore()
