<script setup>
import { ref, onMounted } from 'vue';
import MovieCard from "../components/MovieCard.vue";

const movieList = ref([])
const isLoading = ref(true)

onMounted( async () => {
   const result = await fetch('http://localhost:8000/movies')
   const repsonse = await result.json()
   movieList.value = repsonse
   isLoading.value = false
})
</script>

<template>
    <h1>Movies</h1>
    <div v-if="isLoading" class="max-w-sm mx-auto">
        <span class="text-2xl font-bold text-indigo-700">Is Loading...</span>
    </div>
    <div v-else class="grid grid-cols-3 gap-4">
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
</template>