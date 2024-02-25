<script setup>
const props = defineProps({
    movie: Object
})
</script>

<template>
    <div class="max-w-sm 
        bg-white 
        rounded-lg 
        border 
        border-gray-200 
        shadow-md 
        dark:bg-gray-100 
        dark:border-gray-100">
        <div class="flex justify-center pt-3">
            <img :src="movie.poster" :alt="movie.title" class="rounded-t-lg">
        </div>
        <div class="p-5">
            <RouterLink :to="{name: 'MovieDetails', params: {id: movie.id}}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {{ movie.title }}
                </h5>
            </RouterLink>
            <span class="mr-4">{{ movie.year }}</span>
            <span>{{ movie.runtime }}</span>
        </div>
    </div>
</template>