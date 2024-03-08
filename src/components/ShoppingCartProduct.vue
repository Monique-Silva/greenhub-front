<script>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from '@/stores/product';

export default {
    data() {
        return {
            store: useProductStore()
        }
    },
    props: ["item"],
}

</script>


<template>

    <div class="card w-96 bg-base-100 mg-2 shadow-xl flex flex-row">
        <RouterLink :to="'/product/' + item.id">
            <figure><img :src="item.image" alt="product image"></figure>
        </RouterLink>
        <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <h2 class="card-title">{{ item.category }}</h2>
            <div class="card-actions justify-start">
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number"
                            value={{item.quantity}} min="1" />
                        <span
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            + </span>
                        <h1>{{ item.price }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>